"use strict";
const Constants = require ("../../../Constants");
const SliverQueenBase = require("../setTPR/SliverQueen");

class SliverQueen extends SliverQueenBase {
  constructor (game) {
    super(game, "Sliver Queen", "Stronghold", "STH");
  }
}

module.exports = SliverQueen;
