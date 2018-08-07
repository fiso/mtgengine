"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Knight", "Planar Chaos", "PLC");
  }
}

module.exports = BloodKnight;
