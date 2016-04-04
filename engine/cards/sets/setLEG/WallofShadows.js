"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofShadowsBase = require("../setCHR/WallofShadows.js");

class WallofShadows extends WallofShadowsBase {
  constructor(game) {
    super(game, "Wall of Shadows", "Legends", "LEG");
  }
}

module.exports = WallofShadows;
