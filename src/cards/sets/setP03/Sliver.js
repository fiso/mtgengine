"use strict";
const Constants = require ("../../../Constants");
const SliverBase = require("../setTM15/Sliver");

class Sliver extends SliverBase {
  constructor (game) {
    super(game, "Sliver", "Magic Player Rewards 2003", "P03");
  }
}

module.exports = Sliver;
