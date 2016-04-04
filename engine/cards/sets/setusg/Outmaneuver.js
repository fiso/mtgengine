"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Outmaneuver extends Card {
  constructor(game) {
    super(game, "Outmaneuver", "Urza's Saga", "USG");
  }
}

module.exports = Outmaneuver;
