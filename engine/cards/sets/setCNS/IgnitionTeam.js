"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IgnitionTeam extends Card {
  constructor(game) {
    super(game, "Ignition Team", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = IgnitionTeam;
