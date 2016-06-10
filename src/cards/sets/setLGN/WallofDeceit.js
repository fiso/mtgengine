"use strict";
const Constants = require ("../../../Constants");
const WallofDeceitBase = require("../setDD3_JVC/WallofDeceit");

class WallofDeceit extends WallofDeceitBase {
  constructor (game) {
    super(game, "Wall of Deceit", "Legions", "LGN");
  }
}

module.exports = WallofDeceit;
