"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Who extends Card {
  constructor(game) {
    super(game, "Who", "Unhinged", "UNH");
  }
}

module.exports = Who;
