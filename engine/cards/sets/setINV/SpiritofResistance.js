"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritofResistance extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit of Resistance", "Invasion", "INV");
  }
}

module.exports = SpiritofResistance;
