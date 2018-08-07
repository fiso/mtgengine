"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalObsolescence extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Obsolescence", "Aether Revolt", "AER");
  }
}

module.exports = NaturalObsolescence;
