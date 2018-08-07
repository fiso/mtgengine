"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterPotion extends UnimplementedCard {
  constructor (game) {
    super(game, "Alabaster Potion", "Masters Edition III", "ME3");
  }
}

module.exports = AlabasterPotion;
