"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KiorasDismissal extends Card {
  constructor(game) {
    super(game, "Kiora's Dismissal", "Journey into Nyx", "JOU");
  }
}

module.exports = KiorasDismissal;
