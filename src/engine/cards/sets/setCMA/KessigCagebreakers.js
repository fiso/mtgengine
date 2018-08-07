"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KessigCagebreakers extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig Cagebreakers", "Commander Anthology", "CMA");
  }
}

module.exports = KessigCagebreakers;
