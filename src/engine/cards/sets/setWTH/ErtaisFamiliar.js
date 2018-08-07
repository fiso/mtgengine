"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErtaisFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Ertai's Familiar", "Weatherlight", "WTH");
  }
}

module.exports = ErtaisFamiliar;
