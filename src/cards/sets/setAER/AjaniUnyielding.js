"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjaniUnyielding extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani Unyielding", "Aether Revolt", "AER");
  }
}

module.exports = AjaniUnyielding;
