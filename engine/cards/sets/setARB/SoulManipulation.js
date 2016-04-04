"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulManipulation extends Card {
  constructor(game) {
    super(game, "Soul Manipulation", "Alara Reborn", "ARB");
  }
}

module.exports = SoulManipulation;
