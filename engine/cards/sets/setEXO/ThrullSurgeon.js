"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrullSurgeon extends Card {
  constructor(game) {
    super(game, "Thrull Surgeon", "Exodus", "EXO");
  }
}

module.exports = ThrullSurgeon;
