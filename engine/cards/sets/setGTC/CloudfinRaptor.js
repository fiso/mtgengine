"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudfinRaptor extends Card {
  constructor(game) {
    super(game, "Cloudfin Raptor", "Gatecrash", "GTC");
  }
}

module.exports = CloudfinRaptor;
