"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RobotChicken extends Card {
  constructor(game) {
    super(game, "Robot Chicken", "Celebration", "pCEL");
  }
}

module.exports = RobotChicken;
