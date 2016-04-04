"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LuminousGuardian extends Card {
  constructor(game) {
    super(game, "Luminous Guardian", "Odyssey", "ODY");
  }
}

module.exports = LuminousGuardian;
