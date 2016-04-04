"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandTogether extends Card {
  constructor(game) {
    super(game, "Stand Together", "Darksteel", "DST");
  }
}

module.exports = StandTogether;
