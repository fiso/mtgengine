"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaskiatheUnyielding extends UnimplementedCard {
  constructor (game) {
    super(game, "Saskia the Unyielding", "You Make the Cube", "PZ2");
  }
}

module.exports = SaskiatheUnyielding;
