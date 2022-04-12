from mysql.connector import connect, Error
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Pesquisa todos os pedidos
@app.route('/supermercados', methods = ['GET'])
def get_all_unities():
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM supermercados;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Endereço": item[1], "Telefone": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa produtos em estoque de um supermercado
@app.route('/produtos/estoque', methods = ['POST'])
def get_stock():
    myrequest = request.json
    market = myrequest["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if market != "":
                    cursor.execute('SELECT Nome, Quantidade, Marca FROM estoque INNER JOIN produtos ON produtos.IDProduto = estoque.IDProduto WHERE IDSupermercado = "' + market + '";')
                else:
                    cursor.execute('SELECT Nome, Quantidade, Marca FROM estoque INNER JOIN produtos ON produtos.IDProduto = estoque.IDProduto;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[0], "Marca": item[2], "Quantidade": item[1], "Preço": item[3]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa produtos por categoria especificada
@app.route('/produtos/categoria', methods = ['POST'])
def get_products():
    myrequest = request.json
    category = myrequest["categoria"]
    print(category)
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if category != "":
                    cursor.execute('SELECT Nome, Marca FROM produtos WHERE Categoria = "' + category + '";')
                else:
                    cursor.execute('SELECT Nome, Marca FROM produtos;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[0], "Marca": item[1], "Preço": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa funcionários por cargo especificado em um supermercado especificado
@app.route('/funcionarios', methods = ['POST'])
def get_employees():
    myrequest = request.json
    role = myrequest["cargo"]
    market = myrequest["supermercado"]
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
                    cursor.execute('SELECT Nome, Cargo, funcionários.CPF, Salário FROM funcionários INNER JOIN supermercados_funcionários ON supermercados_funcionários.CPF = funcionários.CPF WHERE Cargo = "' + role + '" AND IDSupermercado = "' + market + '";')
                elif role != "":
                    cursor.execute('SELECT Nome, Cargo, funcionários.CPF, Salário FROM funcionários INNER JOIN supermercados_funcionários ON supermercados_funcionários.CPF = funcionários.CPF WHERE Cargo = "' + role + '";')
                elif market != "":
                    cursor.execute('SELECT Nome, Cargo, funcionários.CPF, Salário FROM funcionários INNER JOIN supermercados_funcionários ON supermercados_funcionários.CPF = funcionários.CPF WHERE IDSupermercado = "' + market + '";')
                else:
                    cursor.execute('SELECT Nome, Cargo, funcionários.CPF, Salário FROM funcionários INNER JOIN supermercados_funcionários ON supermercados_funcionários.CPF = funcionários.CPF;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: { "Nome": item[0], "Cargo": item[1], "CPF": item[2], "Salário": item[3]}, result))
                response = {'response': finalResult}
                print(result)
                
    except Error as e:
        print(e)
    return response

# Pesquisa equipamentos de um supermercado
@app.route('/equipamentos', methods = ['POST'])
def get_equipments():
    myrequest = request.json
    market = myrequest["supermercado"]
    print(market)
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if market != "":
                    cursor.execute('SELECT IDEquipamento, Nome, Marca, Departamento, Descrição FROM equipamentos INNER JOIN supermercados_equipamentos ON supermercados_equipamentos.IDSupermercado = equipamentos.IDSupermercado WHERE IDSupermercado = "' + market + '";')
                else:
                    cursor.execute('SELECT IDEquipamento, Nome, Marca, Departamento, Descrição FROM equipamentos INNER JOIN supermercados_equipamentos ON supermercados_equipamentos.IDSupermercado = equipamentos.IDSupermercado;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Nome": item[1], "Marca": item[2], "Departamento": item[3], "Descrição": item[4]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

# Pesquisa todos os pedidos
@app.route('/pedidos', methods = ['GET'])
def get_all_orders():
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Data de solicitação": item[1], "Data de entrega": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa todos os pedidos de um supermercado
@app.route('/pedidos/supermercado', methods = ['POST'])
def get_orders_by_shop():
    myrequest = request.json
    market = myrequest["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if market != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN supermercados_pedidos ON supermercados_pedidos.IDSupermercado = pedidos.IDSupermercado WHERE IDSupermercado = "' + market + '";')
                else:
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN supermercados_pedidos ON supermercados_pedidos.IDSupermercado = pedidos.IDSupermercado;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Data de solicitação": item[1], "Data de entrega": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa os fornecedores de um produto especificado
@app.route('/fornecedores', methods = ['POST'])
def get_providers_by_product():
    myrequest = request.json
    product = myrequest["nome"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if product != "":
                    cursor.execute('SELECT CNPJ, Nome FROM fornecedores INNER JOIN fornecedores_produtos ON fabricantes.CNPJ = fornecedores_produtos.CNPJ WHERE IDProduto = "' + product + '";')
                else:
                    cursor.execute('SELECT CNPJ, Nome FROM fornecedores INNER JOIN fornecedores_produtos ON fabricantes.CNPJ = fornecedores_produtos.CNPJ;')
                result = cursor.fetchall()
                idproduct = str(result[0][0])
                print(idproduct)
                cursor.execute('SELECT fornecedores.CNPJ, Nome, Custo FROM fornecedores INNER JOIN fornecedores_produtos ON fornecedores.CNPJ = fornecedores_produtos.CNPJ WHERE IDProduto = "' + idproduct + '" ORDER BY Nome;')
                result = cursor.fetchall()
                finalResult = list(map(lambda item: {"Nome": item[1], "CNPJ": item[0], "Custo": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa os pedidos de um fornecedor especificado
@app.route('/pedidos/fornecedor', methods = ['POST'])
def get_orders_by_providers():
    myrequest = request.json
    provider = myrequest["nome"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if provider != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_fornecedores ON  pedidos.IDProduto = pedidos_fornecedores.IDProduto WHERE CNPJ = "' + provider + '";')
                else:
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_fornecedores ON  pedidos.IDProduto = pedidos_fornecedores.IDProduto;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Data de solicitação": item[1], "Data de entrega": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa os pedidos mais recentes de um produto
@app.route('/pedidos/produto', methods = ['POST'])
def get_recent_orders():
    myrequest = request.json
    product = myrequest["nome"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if product != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido WHERE IDPedido = "' + product + '" ORDER BY DataCriação DESC;')
                else:
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido ORDER BY DataCriação DESC;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Data de solicitação": item[1], "Data de entrega": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa os pedidos de um produto específico em um supermercado específico
@app.route('/pedidos', methods = ['POST'])
def get_orders_by_product_and_shop():
    myrequest = request.json
    product = myrequest["idproduto"]
    market = myrequest["supermercado"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if product != "" and market != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido INNER JOIN supermercados_pedidos ON pedidos.IDPedido = supermercados_pedidos.Idpedido WHERE IDProduto = "' + product + '" AND IDSupermercado = "' + market + '";')
                elif product != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido INNER JOIN supermercados_pedidos ON pedidos.IDPedido = supermercados_pedidos.Idpedido WHERE IDProduto = "' + product + '";')
                elif market != "":
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido INNER JOIN supermercados_pedidos ON pedidos.IDPedido = supermercados_pedidos.Idpedido WHERE IDSupermercado = "' + market + '";')
                else :
                    cursor.execute('SELECT IDPedido, DataCriação, DataEntrega FROM pedidos INNER JOIN pedidos_produtos ON pedidos.IDPedido = pedidos_produtos.IDPedido INNER JOIN supermercados_pedidos ON pedidos.IDPedido = supermercados_pedidos.Idpedido;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"ID": item[0], "Data de solicitação": item[1], "Data de entrega": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response

# Pesquisa os itens de um pedido específico
@app.route('/pedidos/itens', methods = ['POST'])
def get_itens_of_a_order():
    myrequest = request.json
    order = myrequest["idpedido"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT produtos.Nome, pedidos_produtos.Quantidade FROM pedidos_produtos INNER JOIN produtos ON pedidos_produtos.IDProduto = produtos.IDProduto WHERE IDPedido = "' + order + '" ORDER BY Nome;')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[0], "Quantidade": item[1]}, result))
                response = {'response': finalResult}
                print(finalResult)
    
    except Error as e:
        print(e)
    return response
