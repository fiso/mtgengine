"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofThorns extends UnimplementedCard {
  constructor(game) {
    super(game, "Rain of Thorns", "Avacyn Restored", "AVR");
  }
}

module.exports = RainofThorns;
