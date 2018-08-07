"use strict";
const Constants = require ("../../../Constants");
const BladeSplicerBase = require("../setMM3/BladeSplicer");

class BladeSplicer extends BladeSplicerBase {
  constructor (game) {
    super(game, "Blade Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = BladeSplicer;
