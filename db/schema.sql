create burgers_db
DROP DATABASE IF EXISTS burgers_db
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255),
  devoured BOOLEAN not null default 0 
  PRIMARY KEY (id)
)
