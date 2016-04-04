"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterPotion extends UnimplementedCard {
  constructor(game) {
    super(game, "Alabaster Potion", "Fifth Edition", "5ED");
  }
}

module.exports = AlabasterPotion;
