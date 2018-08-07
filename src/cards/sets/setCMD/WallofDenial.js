"use strict";
const Constants = require ("../../../Constants");
const WallofDenialBase = require("../setMM3/WallofDenial");

class WallofDenial extends WallofDenialBase {
  constructor (game) {
    super(game, "Wall of Denial", "Commander 2011", "CMD");
  }
}

module.exports = WallofDenial;
