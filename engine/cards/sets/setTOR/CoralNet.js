"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralNet extends Card {
  constructor(game) {
    super(game, "Coral Net", "Torment", "TOR");
  }
}

module.exports = CoralNet;
