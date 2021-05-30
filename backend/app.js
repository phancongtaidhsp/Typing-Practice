var robot = require("robotjs");

// setTimeout(function()
// {
  robot.moveMouse(920, 370);
  robot.mouseClick();
  robot.typeString("t");
  robot.keyToggle('s','down','control')
  robot.moveMouse(1200, 734);
  robot.mouseClick();
  robot.typeString(`git add . ; git commit -m "testing" ; git push`);

// }, 5000);
