"use strict";
const Constants = require ("../../../Constants");
const SliverQueenBase = require("../setTPR/SliverQueen");

class SliverQueen extends SliverQueenBase {
  constructor (game) {
    super(game, "Sliver Queen", "Magic Online Promos", "PRM");
  }
}

module.exports = SliverQueen;
