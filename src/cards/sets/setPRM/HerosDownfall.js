"use strict";
const Constants = require ("../../../Constants");
const HerosDownfallBase = require("../setCP2/HerosDownfall");

class HerosDownfall extends HerosDownfallBase {
  constructor (game) {
    super(game, "Hero's Downfall", "Magic Online Promos", "PRM");
  }
}

module.exports = HerosDownfall;
