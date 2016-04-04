"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScorchedEarth extends Card {
  constructor(game) {
    super(game, "Scorched Earth", "Tempest", "TMP");
  }
}

module.exports = ScorchedEarth;
