"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavensCrime extends Card {
  constructor(game) {
    super(game, "Raven's Crime", "Eventide", "EVE");
  }
}

module.exports = RavensCrime;
