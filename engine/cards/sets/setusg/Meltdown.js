"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Meltdown extends Card {
  constructor(game) {
    super(game, "Meltdown", "Urza's Saga", "USG");
  }
}

module.exports = Meltdown;
