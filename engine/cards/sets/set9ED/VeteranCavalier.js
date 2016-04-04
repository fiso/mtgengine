"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranCavalier extends UnimplementedCard {
  constructor(game) {
    super(game, "Veteran Cavalier", "Ninth Edition", "9ED");
  }
}

module.exports = VeteranCavalier;
