"use strict";
const Constants = require ("../../../Constants");
const SeersLanternBase = require("../setC18/SeersLantern");

class SeersLantern extends SeersLanternBase {
  constructor (game) {
    super(game, "Seer's Lantern", "Battlebond", "BBD");
  }
}

module.exports = SeersLantern;
