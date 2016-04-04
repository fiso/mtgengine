"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulsMajesty extends Card {
  constructor(game) {
    super(game, "Soul's Majesty", "Conflux", "CON");
  }
}

module.exports = SoulsMajesty;
