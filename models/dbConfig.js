const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://timo:<password>@cluster0.xky2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if (!err)console.log("Mongodb connected");
        else console.log("Connection error : " + err);
    }

)

