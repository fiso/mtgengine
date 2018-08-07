"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparringMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparring Mummy", "Battlebond", "BBD");
  }
}

module.exports = SparringMummy;
