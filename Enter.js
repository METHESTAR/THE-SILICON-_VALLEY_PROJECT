var VegeContact1;
var InputBox;

  function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    InputBox = createInput("VC");
     
  }
  
  
  function draw(){
    var VVRef = database.ref('VegetableVendor1/');
    VVRef.on("value",(data)=>{
      VegeContact1 = data.val();
  })

  console.log(VegeContact1);
  InputBox.value(VegeContact1);
  InputBox.position(200, 250);


}
  