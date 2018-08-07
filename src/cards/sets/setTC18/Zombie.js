"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Zombie;
