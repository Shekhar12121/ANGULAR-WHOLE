exp=require("Express")
bp=require("body-parser")
app=exp()
app.listen(1234);
app.use(bp.json())
app.use(exp.static(__dirname))

app.get("/met1",function(x,y){
y.send("Hiiiiiiiii");
})

app.post("/met2",function(req,res){
var dt=req.body
	console.log(dt)
res.send("Abcd")
})