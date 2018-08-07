"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC18/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor (game) {
    super(game, "Magmaquake", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Magmaquake;
