"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatheinLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bathe in Light", "Commander Anthology", "CMA");
  }
}

module.exports = BatheinLight;
