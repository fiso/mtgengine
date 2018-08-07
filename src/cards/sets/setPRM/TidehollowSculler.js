"use strict";
const Constants = require ("../../../Constants");
const TidehollowScullerBase = require("../setMD1/TidehollowSculler");

class TidehollowSculler extends TidehollowScullerBase {
  constructor (game) {
    super(game, "Tidehollow Sculler", "Magic Online Promos", "PRM");
  }
}

module.exports = TidehollowSculler;
