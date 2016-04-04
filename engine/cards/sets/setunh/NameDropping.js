"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NameDropping extends Card {
  constructor(game) {
    super(game, "Name Dropping", "Unhinged", "UNH");
  }
}

module.exports = NameDropping;
