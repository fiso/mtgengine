"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreacherousTerrain extends UnimplementedCard {
  constructor (game) {
    super(game, "Treacherous Terrain", "You Make the Cube", "PZ2");
  }
}

module.exports = TreacherousTerrain;
