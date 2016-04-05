"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PorphyryNodes extends UnimplementedCard {
  constructor(game) {
    super(game, "Porphyry Nodes", "Planar Chaos", "PLC");
  }
}

module.exports = PorphyryNodes;
