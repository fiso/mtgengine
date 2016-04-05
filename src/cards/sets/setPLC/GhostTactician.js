"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostTactician extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Tactician", "Planar Chaos", "PLC");
  }
}

module.exports = GhostTactician;
