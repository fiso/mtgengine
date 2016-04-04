"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrineShamanBase = require("../setICE/BrineShaman.js");

class BrineShaman extends BrineShamanBase {
  constructor(game) {
    super(game, "Brine Shaman", "Masters Edition II", "ME2");
  }
}

module.exports = BrineShaman;
