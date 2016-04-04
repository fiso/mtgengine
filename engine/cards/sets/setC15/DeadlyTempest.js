"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyTempest extends Card {
  constructor(game) {
    super(game, "Deadly Tempest", "Commander 2015", "C15");
  }
}

module.exports = DeadlyTempest;
