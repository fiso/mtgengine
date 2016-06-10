"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set6ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor (game) {
    super(game, "Soul Net", "Seventh Edition", "7ED");
  }
}

module.exports = SoulNet;
