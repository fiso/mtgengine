"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC14/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor(game) {
    super(game, "Magmaquake", "Magic 2013", "M13");
  }
}

module.exports = Magmaquake;
