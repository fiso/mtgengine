"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitchsFamiliar extends Card {
  constructor(game) {
    super(game, "Witch's Familiar", "Magic 2015 Core Set", "M15");
  }
}

module.exports = WitchsFamiliar;
