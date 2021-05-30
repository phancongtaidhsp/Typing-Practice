var robot = require("robotjs");
const delay = require('delay');
setTimeout(function()
{
  setInterval(function() {
    (async() => {
      robot.moveMouse(920, 370);
      robot.mouseClick();
      robot.typeString("t");
  
      robot.moveMouse(370, 55);
      robot.mouseClick();
      robot.moveMouse(370, 270);
      await delay(200);
      robot.mouseClick();
  
      robot.moveMouse(1200, 734);
      robot.mouseClick();
      robot.keyTap('up');
      robot.keyTap('enter');
    })()
  },5000)

}, 8000);