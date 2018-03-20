exp=require("express")
bp=require("body-parser")
ap=exp()
ap.listen(1234)
ap.use(bp.json())
ap.use(exp.static(__dirname))
console.log("Server started")

ap.get("/met1",function(req,res){
res.send("Exec")
})

	ap.post("/met2",function(rq,rs){
	dbody=rq.body
		console.log(dbody)
		rs.send("Recei..")
	})