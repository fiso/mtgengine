"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavengulVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Havengul Vampire", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HavengulVampire;
