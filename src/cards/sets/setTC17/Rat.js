"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rat extends UnimplementedCard {
  constructor (game) {
    super(game, "Rat", "Commander 2017 Tokens", "TC17");
  }
}

module.exports = Rat;
