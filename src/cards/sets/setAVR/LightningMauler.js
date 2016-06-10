"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningMauler extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Mauler", "Avacyn Restored", "AVR");
  }
}

module.exports = LightningMauler;
