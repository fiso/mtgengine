"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthofUnity extends Card {
  constructor(game) {
    super(game, "Strength of Unity", "Invasion", "INV");
  }
}

module.exports = StrengthofUnity;
