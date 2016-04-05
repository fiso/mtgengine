"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GossamerPhantasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Gossamer Phantasm", "Planar Chaos", "PLC");
  }
}

module.exports = GossamerPhantasm;
