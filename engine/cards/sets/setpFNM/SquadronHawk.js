"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquadronHawk extends Card {
  constructor(game) {
    super(game, "Squadron Hawk", "Friday Night Magic", "pFNM");
  }
}

module.exports = SquadronHawk;
