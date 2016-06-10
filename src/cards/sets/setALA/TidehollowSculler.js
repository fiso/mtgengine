"use strict";
const Constants = require ("../../../Constants");
const TidehollowScullerBase = require("../setpFNM/TidehollowSculler");

class TidehollowSculler extends TidehollowScullerBase {
  constructor (game) {
    super(game, "Tidehollow Sculler", "Shards of Alara", "ALA");
  }
}

module.exports = TidehollowSculler;
