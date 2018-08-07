"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Cat Dragon", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = CatDragon;
