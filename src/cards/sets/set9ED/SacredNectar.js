"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredNectar extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Nectar", "Ninth Edition", "9ED");
  }
}

module.exports = SacredNectar;
