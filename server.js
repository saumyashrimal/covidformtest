const exp = require('express');
const app = exp();
const path = require("path");
// const bodyparser = require("body-parser");


app.use(exp.json());

const pdfTemplate = require("./PrintDocuments/form");

// body parser middleware
// app.use(bodyparser.urlencoded({extended:true}));

// app.use(bodyparser.json());


const pdf = require("html-pdf");
// const { json } = require('body-parser');

//connecting build of react with server
app.use(exp.static(path.join(__dirname,'./build/')))




app.post("/create-pdf",(req,res) => {
    pdf.create(pdfTemplate(req.body),{}).toFile("form.pdf",(err) => {
        if(err){
            res.send(Promise.reject())
        }
        else(
            res.send(Promise.resolve())
        )
    })
})

// get -send the generated pdf to client
app.get("/fetch-pdf",(req,res) => {
    res.sendFile(`${__dirname}/form.pdf`)
})



const port = 5000;
app.listen(port,() => console.log(`server is listening to port ${port}.....`))