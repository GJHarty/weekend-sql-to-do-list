CREATE TABLE "todo-list" 
    ("id" SERIAL PRIMARY KEY,
     "taskDesc" VARCHAR (250) NOT NULL,
     "status" VARCHAR(105) DEFAULT 'Pending'
    );

INSERT INTO "todo-list"
    ("taskDesc")
VALUES  
    ('Do the dishes'),
    ('Clean the bathroom'),
    ('Fold laundry');