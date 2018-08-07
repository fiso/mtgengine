"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarbingerofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Harbinger of Night", "Mirage", "MIR");
  }
}

module.exports = HarbingerofNight;
