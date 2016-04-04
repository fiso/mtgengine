"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SynapseSliver extends Card {
  constructor(game) {
    super(game, "Synapse Sliver", "Legions", "LGN");
  }
}

module.exports = SynapseSliver;
