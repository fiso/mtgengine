"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Away", "Avacyn Restored", "AVR");
  }
}

module.exports = SpiritAway;
