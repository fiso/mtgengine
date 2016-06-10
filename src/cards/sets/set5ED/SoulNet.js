"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set6ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor (game) {
    super(game, "Soul Net", "Fifth Edition", "5ED");
  }
}

module.exports = SoulNet;
