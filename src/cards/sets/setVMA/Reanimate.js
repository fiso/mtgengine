"use strict";
const Constants = require ("../../../Constants");
const ReanimateBase = require("../setARC/Reanimate");

class Reanimate extends ReanimateBase {
  constructor (game) {
    super(game, "Reanimate", "Vintage Masters", "VMA");
  }
}

module.exports = Reanimate;
