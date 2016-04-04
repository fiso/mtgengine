"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdvicefromtheFae extends Card {
  constructor(game) {
    super(game, "Advice from the Fae", "Shadowmoor", "SHM");
  }
}

module.exports = AdvicefromtheFae;
