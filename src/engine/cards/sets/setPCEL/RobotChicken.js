"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RobotChicken extends UnimplementedCard {
  constructor (game) {
    super(game, "Robot Chicken", "Celebration Cards", "PCEL");
  }
}

module.exports = RobotChicken;
