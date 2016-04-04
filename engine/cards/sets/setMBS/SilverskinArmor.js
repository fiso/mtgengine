"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverskinArmor extends Card {
  constructor(game) {
    super(game, "Silverskin Armor", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SilverskinArmor;
