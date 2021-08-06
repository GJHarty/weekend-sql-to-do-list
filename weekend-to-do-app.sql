CREATE TABLE "todo-list" 
    ("id" SERIAL PRIMARY KEY,
     "task" VARCHAR (250) NOT NULL,
     "complete" BOOLEAN DEFAULT FALSE
    );

INSERT INTO "todo-list"
    ("task", "complete")
VALUES  
    ('Do the dishes'),
    ('Clean the bathroom'),
    ('Fold laundry');
