"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplosiveRevelation extends Card {
  constructor(game) {
    super(game, "Explosive Revelation", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ExplosiveRevelation;
