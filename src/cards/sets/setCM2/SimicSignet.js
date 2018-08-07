"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Signet", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = SimicSignet;
