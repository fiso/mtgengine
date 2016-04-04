"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SliverQueenBase = require("../setSTH/SliverQueen.js");

class SliverQueen extends SliverQueenBase {
  constructor(game) {
    super(game, "Sliver Queen", "Tempest Remastered", "TPR");
  }
}

module.exports = SliverQueen;
