"use strict";
const Constants = require ("../../../Constants");
const SoulNetBase = require("../set6ED/SoulNet");

class SoulNet extends SoulNetBase {
  constructor(game) {
    super(game, "Soul Net", "Limited Edition Beta", "LEB");
  }
}

module.exports = SoulNet;
