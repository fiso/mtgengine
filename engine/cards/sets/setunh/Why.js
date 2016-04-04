"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Why extends Card {
  constructor(game) {
    super(game, "Why", "Unhinged", "UNH");
  }
}

module.exports = Why;
