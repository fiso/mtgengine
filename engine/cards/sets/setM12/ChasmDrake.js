"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChasmDrake extends Card {
  constructor(game) {
    super(game, "Chasm Drake", "Magic 2012", "M12");
  }
}

module.exports = ChasmDrake;
