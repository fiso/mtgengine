"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Duh extends Card {
  constructor(game) {
    super(game, "Duh", "Unhinged", "UNH");
  }
}

module.exports = Duh;
