exp=require("Express")
mj=require("mongojs")
bp=require("body-parser")
conn=mj("mongodb://dbscott:dbscott123@ds229918.mlab.com:29918/dbnewdb");
app=exp()
app.listen(1234);
app.use(bp.json())
app.use(exp.static(__dirname))
////////Get data
app.get("/getdata",function(req,res){
conn.tbl_user.find(function(err,result){
res.send(result)
})
})

////////Insert data
app.post("/insdata",function(re,rs){
	recdt=re.body
		console.log(recdt)
conn.tbl_user.save(recdt,function(){
	rs.send("Inserted")
	})
})
		///////Del one
app.post("/delone",function(a,b){
dt=a.body
	conn.tbl_user.remove(dt)
	b.send("Deleted")
})
///del all
app.delete("/delall",function(re,rs){
conn.tbl_user.remove()
	rs.send("Delete all")
})
/////Update
app.post("/updatedata",function(req,res){
	bdata=req.body
		console.log(bdata)
conn.tbl_user.update(bdata[0],bdata[1])
		res.send("Updated")
})