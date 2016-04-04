"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrotesqueHybrid extends Card {
  constructor(game) {
    super(game, "Grotesque Hybrid", "Torment", "TOR");
  }
}

module.exports = GrotesqueHybrid;
