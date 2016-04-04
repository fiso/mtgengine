"use strict";
const Constants = require ("../../../Constants");
const WallofWonderBase = require("../setCHR/WallofWonder");

class WallofWonder extends WallofWonderBase {
  constructor(game) {
    super(game, "Wall of Wonder", "Seventh Edition", "7ED");
  }
}

module.exports = WallofWonder;
