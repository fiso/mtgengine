"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavengulVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Havengul Vampire", "Avacyn Restored", "AVR");
  }
}

module.exports = HavengulVampire;
