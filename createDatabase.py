from mysql.connector import connect, Error
import queriesTables as queries

def createTables (cursor):
    for query in queries.queriesArray:
        cursor.execute(query)

def createDatabase(user, password):
    try:
        with connect(
            host="localhost",
            user=user,
            password=password,
        ) as connection:
            create_db_query = "CREATE DATABASE cadeia_supermercados"
            with connection.cursor() as cursor:
                cursor.execute(create_db_query)

            connection.database = "cadeia_supermercados2"
            with connection.cursor() as cursor:
                createTables(cursor)
                
    except Error as e:
        print(e)

user = input("User: ")
password = input("Password: ")
createDatabase(user, password)