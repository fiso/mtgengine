"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChokingTethersBase = require("../setONS/ChokingTethers.js");

class ChokingTethers extends ChokingTethersBase {
  constructor(game) {
    super(game, "Choking Tethers", "Vintage Masters", "VMA");
  }
}

module.exports = ChokingTethers;
