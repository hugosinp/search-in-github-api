import express from 'express';
import cors from 'cors';

export function launch(port){
    const application = express();

    application.use(cors());

    application.get("/api/users/:username", (request, response) => {
        response.json({
            username: request.params.username,
        });
    });

    application.listen(port, () => {
        console.log(`Server started at port http://localhost:${port}`);
    });
}