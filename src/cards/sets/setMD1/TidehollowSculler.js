"use strict";
const Constants = require ("../../../Constants");
const TidehollowScullerBase = require("../setpFNM/TidehollowSculler");

class TidehollowSculler extends TidehollowScullerBase {
  constructor(game) {
    super(game, "Tidehollow Sculler", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = TidehollowSculler;
