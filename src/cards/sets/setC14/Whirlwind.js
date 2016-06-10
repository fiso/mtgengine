"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whirlwind extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirlwind", "Commander 2014", "C14");
  }
}

module.exports = Whirlwind;
