"use strict";
const Constants = require ("../../../Constants");
const WallofDeceitBase = require("../setJVC/WallofDeceit");

class WallofDeceit extends WallofDeceitBase {
  constructor (game) {
    super(game, "Wall of Deceit", "Legions", "LGN");
  }
}

module.exports = WallofDeceit;
