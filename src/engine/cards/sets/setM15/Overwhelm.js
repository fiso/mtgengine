"use strict";
const Constants = require ("../../../Constants");
const OverwhelmBase = require("../setMM2/Overwhelm");

class Overwhelm extends OverwhelmBase {
  constructor (game) {
    super(game, "Overwhelm", "Magic 2015", "M15");
  }
}

module.exports = Overwhelm;
