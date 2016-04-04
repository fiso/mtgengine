"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicKeyrune extends Card {
  constructor(game) {
    super(game, "Simic Keyrune", "Commander 2015", "C15");
  }
}

module.exports = SimicKeyrune;
