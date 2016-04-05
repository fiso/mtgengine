"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Ajani's Chosen", "Commander 2015", "C15");
  }
}

module.exports = AjanisChosen;
