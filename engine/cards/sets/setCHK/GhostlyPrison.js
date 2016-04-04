"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyPrison extends Card {
  constructor(game) {
    super(game, "Ghostly Prison", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GhostlyPrison;
