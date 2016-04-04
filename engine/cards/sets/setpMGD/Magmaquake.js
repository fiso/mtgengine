"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC14/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor(game) {
    super(game, "Magmaquake", "Magic Game Day", "pMGD");
  }
}

module.exports = Magmaquake;
