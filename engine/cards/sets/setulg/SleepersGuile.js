"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SleepersGuile extends Card {
  constructor(game) {
    super(game, "Sleeper's Guile", "Urza's Legacy", "ULG");
  }
}

module.exports = SleepersGuile;
