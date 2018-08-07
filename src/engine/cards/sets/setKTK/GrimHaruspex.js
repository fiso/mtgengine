"use strict";
const Constants = require ("../../../Constants");
const GrimHaruspexBase = require("../setUGIN/GrimHaruspex");

class GrimHaruspex extends GrimHaruspexBase {
  constructor (game) {
    super(game, "Grim Haruspex", "Khans of Tarkir", "KTK");
  }
}

module.exports = GrimHaruspex;
