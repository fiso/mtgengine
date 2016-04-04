"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalFrenzy extends Card {
  constructor(game) {
    super(game, "Fatal Frenzy", "Planar Chaos", "PLC");
  }
}

module.exports = FatalFrenzy;
