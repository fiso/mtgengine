"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarchoftheMachines extends Card {
  constructor(game) {
    super(game, "March of the Machines", "Archenemy", "ARC");
  }
}

module.exports = MarchoftheMachines;
