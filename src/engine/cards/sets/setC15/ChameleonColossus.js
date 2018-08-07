"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChameleonColossus extends UnimplementedCard {
  constructor (game) {
    super(game, "Chameleon Colossus", "Commander 2015", "C15");
  }
}

module.exports = ChameleonColossus;
