"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC14/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor(game) {
    super(game, "Magmaquake", "Commander 2015", "C15");
  }
}

module.exports = Magmaquake;
