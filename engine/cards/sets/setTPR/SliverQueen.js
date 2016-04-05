"use strict";
const Constants = require ("../../../Constants");
const SliverQueenBase = require("../setSTH/SliverQueen");

class SliverQueen extends SliverQueenBase {
  constructor(game) {
    super(game, "Sliver Queen", "Tempest Remastered", "TPR");
  }
}

module.exports = SliverQueen;
