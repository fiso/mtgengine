"use strict";
const Constants = require ("../../../Constants");
const GrimHaruspexBase = require("../setUGIN/GrimHaruspex");

class GrimHaruspex extends GrimHaruspexBase {
  constructor (game) {
    super(game, "Grim Haruspex", "Magic Online Promos", "PRM");
  }
}

module.exports = GrimHaruspex;
