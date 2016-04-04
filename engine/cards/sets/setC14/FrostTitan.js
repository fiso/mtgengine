"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostTitan extends Card {
  constructor(game) {
    super(game, "Frost Titan", "Commander 2014", "C14");
  }
}

module.exports = FrostTitan;
