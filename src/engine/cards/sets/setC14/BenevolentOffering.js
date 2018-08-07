"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenevolentOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Benevolent Offering", "Commander 2014", "C14");
  }
}

module.exports = BenevolentOffering;
