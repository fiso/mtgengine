"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScareTactics extends Card {
  constructor(game) {
    super(game, "Scare Tactics", "Exodus", "EXO");
  }
}

module.exports = ScareTactics;
