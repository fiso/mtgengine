"use strict";
const Constants = require ("../../../Constants");
const TidehollowScullerBase = require("../setMD1/TidehollowSculler");

class TidehollowSculler extends TidehollowScullerBase {
  constructor (game) {
    super(game, "Tidehollow Sculler", "Friday Night Magic 2010", "F10");
  }
}

module.exports = TidehollowSculler;
