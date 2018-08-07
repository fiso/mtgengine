"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC18/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor (game) {
    super(game, "Magmaquake", "Commander 2014", "C14");
  }
}

module.exports = Magmaquake;
