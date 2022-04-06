create_table_supermercados = """
CREATE TABLE supermercados (
    IDSupermercado INT NOT NULL UNIQUE KEY AUTO_INCREMENT,
    Endereço  VARCHAR(100) NOT NULL,
    Telefone  VARCHAR(20) NOT NULL,
    PRIMARY KEY (IDSupermercado)
)
"""

create_table_produtos = """
CREATE TABLE produtos (
    IDProduto INT NOT NULL UNIQUE KEY AUTO_INCREMENT,
    Nome  VARCHAR(100) NOT NULL,
    Marca  VARCHAR(100) NOT NULL,
    Departamento  VARCHAR(100) NOT NULL,
    Descrição  VARCHAR(100) NOT NULL,
    PRIMARY KEY (IDProduto)
)
"""

create_table_fornecedores = """
CREATE TABLE fornecedores (
    CNPJ VARCHAR(18) NOT NULL UNIQUE KEY,
    Nome  VARCHAR(100) NOT NULL,
    Endereço VARCHAR(100) NOT NULL,
    Email  VARCHAR(100) NOT NULL,
    Telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY (CNPJ)
)
"""

create_table_funcionarios = """
CREATE TABLE funcionários (
    CPF VARCHAR(14) NOT NULL UNIQUE KEY,
    Nome VARCHAR(100) NOT NULL,
    Cargo VARCHAR(45) NOT NULL,
    Email VARCHAR(45) NOT NULL,
    Endereço  VARCHAR(100) NOT NULL,
    Salário VARCHAR(14) NOT NULL,
    PRIMARY KEY (CPF)

)
"""

create_table_equipamentos = """
CREATE TABLE equipamentos (
    IDEquipamento INT NOT NULL UNIQUE KEY AUTO_INCREMENT,
    Nome  VARCHAR(100) NOT NULL,
    Marca  VARCHAR(100) NOT NULL,
    Departamento  VARCHAR(100) NOT NULL,
    Descrição  VARCHAR(100) NOT NULL,
    PRIMARY KEY (IDEquipamento)
)
"""

create_table_pedidos = """
CREATE TABLE pedidos (
	IDPedido INT NOT NULL UNIQUE KEY AUTO_INCREMENT,
	DataCriação  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	DataEntrega  TIMESTAMP NOT NULL,
	PRIMARY KEY (IDPedido)
)
"""


queriesArray = [create_table_supermercados, create_table_produtos, create_table_funcionarios, 
create_table_fornecedores,  create_table_equipamentos, create_table_pedidos]