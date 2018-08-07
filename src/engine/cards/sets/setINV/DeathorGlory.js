"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathorGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Death or Glory", "Invasion", "INV");
  }
}

module.exports = DeathorGlory;
