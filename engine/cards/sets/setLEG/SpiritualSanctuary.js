"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiritual Sanctuary", "Legends", "LEG");
  }
}

module.exports = SpiritualSanctuary;
