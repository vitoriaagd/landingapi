const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array (
        request.body.title,
        request.body.description,
    );
      
    const quarry = "INSERT INTO db_tasks(title,description) VALUES(?,?)";

    connection.quarry(quarry, params, (err, results) => {
        if(results) {
        response
            .status(201)
            .json({
                success: true,
                message: "sucesso",
                data: results
            })
        }
    })

}

