"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soar extends UnimplementedCard {
  constructor (game) {
    super(game, "Soar", "Mirage", "MIR");
  }
}

module.exports = Soar;
