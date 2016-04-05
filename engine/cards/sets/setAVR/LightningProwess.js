"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningProwess extends UnimplementedCard {
  constructor(game) {
    super(game, "Lightning Prowess", "Avacyn Restored", "AVR");
  }
}

module.exports = LightningProwess;
