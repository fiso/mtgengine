"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverlaidTerrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Overlaid Terrain", "Nemesis", "NMS");
  }
}

module.exports = OverlaidTerrain;
