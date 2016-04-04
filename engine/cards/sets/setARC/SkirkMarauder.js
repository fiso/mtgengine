"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirkMarauder extends Card {
  constructor(game) {
    super(game, "Skirk Marauder", "Archenemy", "ARC");
  }
}

module.exports = SkirkMarauder;
