"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class When extends Card {
  constructor(game) {
    super(game, "When", "Unhinged", "UNH");
  }
}

module.exports = When;
