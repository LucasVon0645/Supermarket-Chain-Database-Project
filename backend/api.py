from mysql.connector import connect, Error
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/produtos', methods = ['POST'])
def get_produtcs():
    myresponse = request.json
    department = myresponse["departamento"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM produtos WHERE Departamento = "'+department+'"')
                result = cursor.fetchall()
                print(result)
                finalResult = list(map(lambda item: {"Nome": item[1], "Marca": item[2]}, result))
                response = {'response': finalResult}
                print(finalResult)
                
    except Error as e:
        print(e)
    return response

@app.route('/funcionarios', methods = ['POST'])
def get_employees():
    myresponse = request.json
    role = myresponse["cargo"]
    response = {}
    try:
        with connect(
            host="localhost",
            user=u"root",
            password="mysql",
            database="cadeia_supermercados"
        ) as connection:
            with connection.cursor() as cursor:
                if role != "":
                    cursor.execute('SELECT * FROM funcionários WHERE Cargo = "'+role+'"')
                else:
                    cursor.execute('SELECT * FROM funcionários')
                result = cursor.fetchall()
                finalResult = list(map(lambda item: { "Nome": item[1], "Salário": item[5]}, result))
                response = {'response': finalResult}
                print(result)
                
    except Error as e:
        print(e)
    return response