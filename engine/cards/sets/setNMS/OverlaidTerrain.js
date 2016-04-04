"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OverlaidTerrain extends Card {
  constructor(game) {
    super(game, "Overlaid Terrain", "Nemesis", "NMS");
  }
}

module.exports = OverlaidTerrain;
