CREATE TABLE "todo-list" 
    ("id" SERIAL PRIMARY KEY,
     "taskDesc" VARCHAR (250) NOT NULL,
     "complete" VARCHAR(15) DEFAULT 'pending'
    );

INSERT INTO "todo-list"
    ("taskDesc")
VALUES  
    ('Do the dishes'),
    ('Clean the bathroom'),
    ('Fold laundry');
    

    
