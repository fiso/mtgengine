"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbunasChant extends Card {
  constructor(game) {
    super(game, "Abuna's Chant", "Fifth Dawn", "5DN");
  }
}

module.exports = AbunasChant;
