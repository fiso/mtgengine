"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GratuitousViolence extends Card {
  constructor(game) {
    super(game, "Gratuitous Violence", "Onslaught", "ONS");
  }
}

module.exports = GratuitousViolence;
