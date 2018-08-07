"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wellspring extends UnimplementedCard {
  constructor (game) {
    super(game, "Wellspring", "Mirage", "MIR");
  }
}

module.exports = Wellspring;
