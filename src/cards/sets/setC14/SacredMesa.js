"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredMesa extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Mesa", "Commander 2014", "C14");
  }
}

module.exports = SacredMesa;
