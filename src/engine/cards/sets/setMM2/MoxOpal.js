"use strict";
const Constants = require ("../../../Constants");
const MoxOpalBase = require("../setMPS/MoxOpal");

class MoxOpal extends MoxOpalBase {
  constructor (game) {
    super(game, "Mox Opal", "Modern Masters 2015", "MM2");
  }
}

module.exports = MoxOpal;
