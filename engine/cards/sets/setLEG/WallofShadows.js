"use strict";
const Constants = require ("../../../Constants");
const WallofShadowsBase = require("../setCHR/WallofShadows");

class WallofShadows extends WallofShadowsBase {
  constructor(game) {
    super(game, "Wall of Shadows", "Legends", "LEG");
  }
}

module.exports = WallofShadows;
