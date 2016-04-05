"use strict";
const Constants = require ("../../../Constants");
const BojukaBogBase = require("../setC13/BojukaBog");

class BojukaBog extends BojukaBogBase {
  constructor(game) {
    super(game, "Bojuka Bog", "Worldwake", "WWK");
  }
}

module.exports = BojukaBog;
