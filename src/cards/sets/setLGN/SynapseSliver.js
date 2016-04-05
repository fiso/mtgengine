"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SynapseSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Synapse Sliver", "Legions", "LGN");
  }
}

module.exports = SynapseSliver;
