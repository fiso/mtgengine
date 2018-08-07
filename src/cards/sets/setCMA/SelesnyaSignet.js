"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelesnyaSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Selesnya Signet", "Commander Anthology", "CMA");
  }
}

module.exports = SelesnyaSignet;
