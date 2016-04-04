"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamiteSanctuary extends Card {
  constructor(game) {
    super(game, "Samite Sanctuary", "Prophecy", "PCY");
  }
}

module.exports = SamiteSanctuary;
