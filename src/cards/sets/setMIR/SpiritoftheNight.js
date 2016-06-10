"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritoftheNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit of the Night", "Mirage", "MIR");
  }
}

module.exports = SpiritoftheNight;
