"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShinkaGatekeeper extends Card {
  constructor(game) {
    super(game, "Shinka Gatekeeper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShinkaGatekeeper;
