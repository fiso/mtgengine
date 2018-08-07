"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Dragon;
