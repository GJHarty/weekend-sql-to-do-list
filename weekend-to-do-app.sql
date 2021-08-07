CREATE TABLE "todo-list" 
    ("id" SERIAL PRIMARY KEY,
     "task" VARCHAR (250) NOT NULL,
     "complete" VARCHAR(15) DEFAULT 'pending'
    );

INSERT INTO "todo-list"
    ("task")
VALUES  
    ('Do the dishes'),
    ('Clean the bathroom'),
    ('Fold laundry');
    

    
