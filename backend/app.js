var robot = require("robotjs");

// setTimeout(function()
// {
  robot.moveMouse(1200, 750);
  robot.mouseClick();
  robot.typeString(`git add . ; git commit -m "testing" ; git push`);
  robot.keyTap('enter');
  // robot.moveMouse(920, 370);
  // robot.mouseClick();
  // robot.typeString("t");
  // robot.moveMouse(1200, 734);
  // robot.mouseClick();
  // robot.typeString(`git add . ; git commit -m "testing" ; git push`);

// }, 5000);
