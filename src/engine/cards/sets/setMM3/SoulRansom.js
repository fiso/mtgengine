"use strict";
const Constants = require ("../../../Constants");
const SoulRansomBase = require("../setE01/SoulRansom");

class SoulRansom extends SoulRansomBase {
  constructor (game) {
    super(game, "Soul Ransom", "Modern Masters 2017", "MM3");
  }
}

module.exports = SoulRansom;
