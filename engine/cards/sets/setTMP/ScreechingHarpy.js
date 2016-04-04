"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingHarpy extends Card {
  constructor(game) {
    super(game, "Screeching Harpy", "Tempest", "TMP");
  }
}

module.exports = ScreechingHarpy;
