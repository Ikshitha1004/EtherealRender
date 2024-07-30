import express from 'express';
 import * as dotenv from 'dotenv';
 import OpenAI from 'openai';
// import { Configuration, OpenAIApi } from 'openai';


 dotenv.config();

 const router = express.Router();

// const configuration = new Configuration({
//     apiKey:process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization:"org-JjSw0zBc8XsYnWKyAS40W6MU",
  
});


router.route('/').get((req,res) => {
    //console.log(req.json());
   res.send("hey")
});
router.route('/').post(async (req,res) => {
   const { prompt } = req.body;
    try{
        const aiResponse = await openai.images.generate({
            prompt,
            n:1,
            size:'1024x1024',
            response_format : 'b64_json',
        });

        const ai_image = aiResponse.data.data[0].b64_json;

        res.status(200).json({photo:ai_image});

    }
    catch(error){
        console.log(error);
        //res.status(500).send(error?.response.data.error.message);
    }
})
export default router;
