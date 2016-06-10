"use strict";
const Constants = require ("../../../Constants");
const BrineShamanBase = require("../setICE/BrineShaman");

class BrineShaman extends BrineShamanBase {
  constructor (game) {
    super(game, "Brine Shaman", "Masters Edition II", "ME2");
  }
}

module.exports = BrineShaman;
