"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrosisthePurger extends UnimplementedCard {
  constructor (game) {
    super(game, "Crosis, the Purger", "Invasion", "INV");
  }
}

module.exports = CrosisthePurger;
