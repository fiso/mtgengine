"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LionsEyeDiamond extends Card {
  constructor(game) {
    super(game, "Lion's Eye Diamond", "Mirage", "MIR");
  }
}

module.exports = LionsEyeDiamond;
