"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrzhovCluestone extends Card {
  constructor(game) {
    super(game, "Orzhov Cluestone", "Commander 2015", "C15");
  }
}

module.exports = OrzhovCluestone;
