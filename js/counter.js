function updateCounter(){
    fetch("https://yhlecntxrl.execute-api.us-east-1.amazonaws.com/v1/visitor-count")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
		console.log("obj:"+JSON.stringify(obj));
		console.log("Object.keys(object1):"+Object.keys(obj));
		console.log("obj.body.visitorCount"+Object.keys(obj.body));
                console.log("obj.body.visitorCount"+Object.keys(obj.headers))
        document.getElementById("counter").innerHTML=obj.body.visitorCount;
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }