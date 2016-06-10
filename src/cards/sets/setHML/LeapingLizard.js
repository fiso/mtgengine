"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeapingLizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Leaping Lizard", "Homelands", "HML");
  }
}

module.exports = LeapingLizard;
