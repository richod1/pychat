const express=require('express')
const app=express()
const cors=require('cors')
const axios=require('axios')
const port=4000
require('dotenv').config()

app.use(cors({origin:true}))
app.use(express.json())

// app.get('/user',(req,res)=>{
// res.send('user in application')
// })


app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": "7451ff19-fd93-451d-be26-39e5298149ea" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// app.post("/authenticate", async (req, res) => {
//     const { username } = req.body;
//     // Get or create user on Chat Engine!
//     try {
//       const r = await axios.put(
//         "https://api.chatengine.io/users/",
//         { username: username, secret: username, first_name: username },
//         { headers: { "Private-Key": "7451ff19-fd93-451d-be26-39e5298149ea" } }
//       );
//       return res.status(r.status).json(r.data);
//     } catch (e) {
//       return res.status(e.response.status).json(e.response.data);
//     }
//   });


  app.post("/login", async (req, res) => {
    const { username, secret } = req.body;
  

    try {
      const r = await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": "ca9b97b2-0b81-446e-921b-8bff39ecd27b",
          "User-Name": username,
          "User-Secret": secret,
        },
      });
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });
    


app.listen(port,()=>{
    console.log(`server stated on port ${port}`)
})