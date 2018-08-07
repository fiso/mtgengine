"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestingDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Nesting Dragon", "Commander 2018", "C18");
  }
}

module.exports = NestingDragon;
