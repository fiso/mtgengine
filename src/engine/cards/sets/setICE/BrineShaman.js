"use strict";
const Constants = require ("../../../Constants");
const BrineShamanBase = require("../setME2/BrineShaman");

class BrineShaman extends BrineShamanBase {
  constructor (game) {
    super(game, "Brine Shaman", "Ice Age", "ICE");
  }
}

module.exports = BrineShaman;
