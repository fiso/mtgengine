"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverskinArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Silverskin Armor", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SilverskinArmor;
