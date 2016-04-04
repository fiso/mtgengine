"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReveilleSquad extends Card {
  constructor(game) {
    super(game, "Reveille Squad", "Prophecy", "PCY");
  }
}

module.exports = ReveilleSquad;
