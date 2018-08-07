"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clue extends UnimplementedCard {
  constructor (game) {
    super(game, "Clue", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Clue;
