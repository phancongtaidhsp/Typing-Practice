var robot = require("robotjs");

setTimeout(function()
{
  robot.moveMouse(920, 370);
  robot.mouseClick();
  robot.typeString("t");
  robot.moveMouse(1200, 734);
  robot.mouseClick();
  robot.typeStringDelayed(`git add . ; git commit -m "testing" ; git push`,0.01);

}, 3000);