"use strict";
const Constants = require ("../../../Constants");
const SliverQueenBase = require("../setTPR/SliverQueen");

class SliverQueen extends SliverQueenBase {
  constructor (game) {
    super(game, "Sliver Queen", "Commander's Arsenal Oversized", "OCM1");
  }
}

module.exports = SliverQueen;
