"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BuildersBane extends Card {
  constructor(game) {
    super(game, "Builder's Bane", "Mirage", "MIR");
  }
}

module.exports = BuildersBane;
