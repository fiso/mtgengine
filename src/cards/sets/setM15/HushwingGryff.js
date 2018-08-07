"use strict";
const Constants = require ("../../../Constants");
const HushwingGryffBase = require("../setC16/HushwingGryff");

class HushwingGryff extends HushwingGryffBase {
  constructor (game) {
    super(game, "Hushwing Gryff", "Magic 2015", "M15");
  }
}

module.exports = HushwingGryff;
