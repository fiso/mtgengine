"use strict";
const Constants = require ("../../../Constants");
const JayaBallardTaskMageBase = require("../setpMEI/JayaBallardTaskMage");

class JayaBallardTaskMage extends JayaBallardTaskMageBase {
  constructor (game) {
    super(game, "Jaya Ballard, Task Mage", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = JayaBallardTaskMage;
