"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalDominion extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Dominion", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = EternalDominion;
