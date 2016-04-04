"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealmsBefittingMyMajesty extends Card {
  constructor(game) {
    super(game, "Realms Befitting My Majesty", "Archenemy", "ARC");
  }
}

module.exports = RealmsBefittingMyMajesty;
