"use strict";
const Constants = require ("../../../Constants");
const SliverOverlordBase = require("../setH09/SliverOverlord");

class SliverOverlord extends SliverOverlordBase {
  constructor (game) {
    super(game, "Sliver Overlord", "Scourge", "SCG");
  }
}

module.exports = SliverOverlord;
