"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueofVermin extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague of Vermin", "Shadowmoor", "SHM");
  }
}

module.exports = PlagueofVermin;
