from mysql.connector import connect, Error
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Pesquisa produtos em estoque de um supermercado
@app.route('/produtos', methods = ['POST'])
def get_stock():
    myresponse = request.json
    market = myresponse["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT Nome, Quantidade, Marca FROM estoque INNER JOIN produtos ON produtos.IDProduto = estoque.IDProduto WHERE IDSupermercado = "' + market + '";')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[0], "Marca": item[2], "Quantidade": item[1]} result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa produtos por categoria especificada
@app.route('/produtos', methods = ['POST'])
def get_products():
    myresponse = request.json
    category = myresponse["categoria"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT Nome, Marca FROM produtos WHERE Categoria = "' + category + '";')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[0], "Marca": item[1]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa funcionários por cargo especificado em um supermercado especificado
@app.route('/funcionarios', methods = ['POST'])
def get_employees():
    myresponse = request.json
    role = myresponse["cargo"]
    market = myresponse["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if role != "" and market != "":
                    cursor.execute('SELECT Nome, Cargo, CPF FROM funcionários INNER JOIN supermercados-funcionários ON supermercados-funcionários.IDSupermercado = funcionários.IDSupermercado WHERE Cargo = "' + role + '" AND IDSupermercado = "' + market + '";')
                elif role != "":
                    cursor.execute('SELECT Nome, Cargo, CPF FROM funcionários INNER JOIN supermercados-funcionários ON supermercados-funcionários.IDSupermercado = funcionários.IDSupermercado WHERE Cargo = "' + role + '";')
                elif market != "":
                    cursor.execute('SELECT Nome, Cargo, CPF FROM funcionários INNER JOIN supermercados-funcionários ON supermercados-funcionários.IDSupermercado = funcionários.IDSupermercado WHERE IDSupermercado = "' + market + '";')
                else:
                    cursor.execute('SELECT Nome, Cargo, CPF FROM funcionários INNER JOIN supermercados-funcionários ON supermercados-funcionários.IDSupermercado = funcionários.IDSupermercado;')
                result = cursor.fetchall()
                finalResult = list(map(lambda item: { "Nome": item[0], "Cargo": item[1], "CPF": item[2]}, result))
                response = {'response': finalResult}
                print(result)
                
    except Error as e:
        print(e)
    return response

# Pesquisa equipamentos de um supermercado
@app.route('/equipamentos', methods = ['POST'])
def get_equipments():
    myresponse = request.json
    market = myresponse["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM equipamentos INNER JOIN supermercados-equipamentos ON supermercados-equipamentos.IDSupermercado = equipamentos.IDSupermercado WHERE IDSupermercado = "' + market + '";')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Nome": item[1], "Marca": item[2], "Departamento": item[3], "Descrição": item[4]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa todos os pedidos
@app.route('/pedidos', methods = ['POST'])
def get_all_orders():
    myresponse = request.json
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM pedidos;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Nome": item[1], "Marca": item[2], "Departamento": item[3], "Descrição": item[4]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response
