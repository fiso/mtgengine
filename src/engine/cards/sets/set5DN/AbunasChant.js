"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbunasChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Abuna's Chant", "Fifth Dawn", "5DN");
  }
}

module.exports = AbunasChant;
