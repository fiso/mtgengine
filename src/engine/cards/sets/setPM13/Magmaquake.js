"use strict";
const Constants = require ("../../../Constants");
const MagmaquakeBase = require("../setC18/Magmaquake");

class Magmaquake extends MagmaquakeBase {
  constructor (game) {
    super(game, "Magmaquake", "Magic 2013 Promos", "PM13");
  }
}

module.exports = Magmaquake;
