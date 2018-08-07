"use strict";
const Constants = require ("../../../Constants");
const SoulRansomBase = require("../setE01/SoulRansom");

class SoulRansom extends SoulRansomBase {
  constructor (game) {
    super(game, "Soul Ransom", "Gatecrash", "GTC");
  }
}

module.exports = SoulRansom;
