"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindCreeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Creeper", "Fifth Dawn", "5DN");
  }
}

module.exports = BlindCreeper;
