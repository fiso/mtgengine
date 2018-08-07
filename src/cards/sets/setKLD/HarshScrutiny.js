"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarshScrutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Harsh Scrutiny", "Kaladesh", "KLD");
  }
}

module.exports = HarshScrutiny;
