"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Unhinge extends Card {
  constructor(game) {
    super(game, "Unhinge", "Torment", "TOR");
  }
}

module.exports = Unhinge;
