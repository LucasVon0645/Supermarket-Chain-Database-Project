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
    IDEquipamento VARCHAR(14) NOT NULL UNIQUE KEY,
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

create_table_supermercados_pedidos = """
CREATE TABLE supermercados_pedidos (
    IDSupermercado INT NOT NULL,
    IDPedido INT NOT NULL UNIQUE,
    PRIMARY KEY (IDSupermercado, IDPedido),
    FOREIGN KEY (IDSupermercado)
        REFERENCES supermercados (IDSupermercado)
        ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (IDPedido)
        REFERENCES pedidos (IDPedido)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""

create_table_estoques = """
CREATE TABLE estoques (
    IDSupermercado INT NOT NULL,
    IDProduto INT NOT NULL,
    Quantidade INT NOT NULL,
    PRIMARY KEY (IDSupermercado, IDProduto),
    FOREIGN KEY  (IDSupermercado)
        REFERENCES supermercados (IDSupermercado)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (IDProduto)
        REFERENCES produtos (IDProduto)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""
create_table_supermercados_funcionarios = """
CREATE TABLE supermercados_funcionários (
    CPF VARCHAR(14) NOT NULL,
    IDSupermercado INT NOT NULL,
    PRIMARY KEY (CPF, IDSupermercado),
    FOREIGN KEY  (CPF)
        REFERENCES funcionários (CPF)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (IDSupermercado)
        REFERENCES supermercados (IDSupermercado)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""
create_table_supermercados_equipamentos = """
CREATE TABLE supermercados_equipamentos (
    IDSupermercado INT NOT NULL,
    IDEquipamento VARCHAR(14) NOT NULL UNIQUE,
    PRIMARY KEY (IDSupermercado, IDEquipamento),
    FOREIGN KEY (IDSupermercado)
        REFERENCES supermercados (IDSupermercado)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (IDEquipamento)
        REFERENCES equipamentos (IDEquipamento)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""

create_table_pedidos_produtos = """
CREATE TABLE pedidos_produtos (
    IDPedido INT NOT NULL,
    IDProduto INT NOT NULL,
    Quantidade INT NOT NULL,
    PRIMARY KEY (IDPedido, IDProduto),
    FOREIGN KEY (IDPedido)
        REFERENCES pedidos (IDPedido)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (IDProduto)
        REFERENCES produtos (IDProduto)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT Quantidade CHECK (Quantidade > 0)
)
"""

create_table_fornecedores_produtos = """
CREATE TABLE fornecedores_produtos (
    CNPJ VARCHAR(18) NOT NULL,
    IDProduto INT NOT NULL,
    Custo VARCHAR(14) NOT NULL,
    PRIMARY KEY (CNPJ, IDProduto),
    FOREIGN KEY (CNPJ)
        REFERENCES fornecedores (CNPJ)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (IDProduto)
        REFERENCES produtos (IDProduto)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""

create_table_pedidos_fornecedores = """
CREATE TABLE pedidos_fornecedores (
    IDPedido INT NOT NULL UNIQUE,
    CNPJ VARCHAR(18) NOT NULL,
    PRIMARY KEY (IDPedido, CNPJ),
    FOREIGN KEY (IDPedido)
        REFERENCES pedidos (IDPedido)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CNPJ)
        REFERENCES fornecedores (CNPJ)
        ON DELETE CASCADE ON UPDATE CASCADE
)
"""


queriesArray = [
    create_table_supermercados, create_table_produtos, create_table_funcionarios,
    create_table_fornecedores,  create_table_equipamentos, create_table_pedidos,
    create_table_supermercados_pedidos, create_table_estoques,
    create_table_supermercados_funcionarios, create_table_supermercados_equipamentos,
    create_table_pedidos_produtos, create_table_fornecedores_produtos, create_table_pedidos_fornecedores
]
