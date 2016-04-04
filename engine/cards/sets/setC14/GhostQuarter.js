"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostQuarter extends Card {
  constructor(game) {
    super(game, "Ghost Quarter", "Commander 2014", "C14");
  }
}

module.exports = GhostQuarter;
