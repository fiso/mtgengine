"use strict";
const Constants = require ("../../../Constants");
const JayaBallardTaskMageBase = require("../setPD2/JayaBallardTaskMage");

class JayaBallardTaskMage extends JayaBallardTaskMageBase {
  constructor (game) {
    super(game, "Jaya Ballard, Task Mage", "Time Spiral", "TSP");
  }
}

module.exports = JayaBallardTaskMage;
