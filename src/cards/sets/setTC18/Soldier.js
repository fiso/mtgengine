"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldier", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Soldier;
