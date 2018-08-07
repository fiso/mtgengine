"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC18/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor (game) {
    super(game, "Magmaquake", "Magic Online Promos", "PRM");
  }
}

module.exports = Magmaquake;
