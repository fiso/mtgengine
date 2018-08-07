"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ape extends UnimplementedCard {
  constructor (game) {
    super(game, "Ape", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Ape;
