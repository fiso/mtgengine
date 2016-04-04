"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReleasetheAnts extends Card {
  constructor(game) {
    super(game, "Release the Ants", "Morningtide", "MOR");
  }
}

module.exports = ReleasetheAnts;
