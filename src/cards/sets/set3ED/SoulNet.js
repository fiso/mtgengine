"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set6ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor (game) {
    super(game, "Soul Net", "Revised Edition", "3ED");
  }
}

module.exports = SoulNet;
