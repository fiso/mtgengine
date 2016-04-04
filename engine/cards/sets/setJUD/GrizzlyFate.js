"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrizzlyFate extends Card {
  constructor(game) {
    super(game, "Grizzly Fate", "Judgment", "JUD");
  }
}

module.exports = GrizzlyFate;
