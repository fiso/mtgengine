"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Plummet extends Card {
  constructor(game) {
    super(game, "Plummet", "Archenemy", "ARC");
  }
}

module.exports = Plummet;
