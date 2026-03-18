-- Insere os computadores (Um único comando SQL)
INSERT INTO computers (name, localization, description) VALUES ('Computador 01', 'Sala 1', 'Computador para uso geral');
INSERT INTO computers (name, localization, description) VALUES ('Computador 02', 'Sala 1', 'Computador para uso geral');
INSERT INTO computers (name, localization, description) VALUES ('Computador 03', 'Sala 2', 'Computador com softwares de edição');
INSERT INTO computers (name, localization, description) VALUES ('Computador 04', 'Sala 3', 'Computador para aulas práticas');
INSERT INTO computers (name, localization, description) VALUES ('Computador 05', 'Laboratório', 'Computador de alto desempenho');

-- Corrigido para bater com a sua Entity User.java
INSERT INTO users (name, rg) VALUES ('Admin', '00.000.000-0');
INSERT INTO users (name, rg) VALUES ('Usuario 1', '11.111.111-1');