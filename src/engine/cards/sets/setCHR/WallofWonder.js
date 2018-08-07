"use strict";
const Constants = require ("../../../Constants");
const WallofWonderBase = require("../set7ED/WallofWonder");

class WallofWonder extends WallofWonderBase {
  constructor (game) {
    super(game, "Wall of Wonder", "Chronicles", "CHR");
  }
}

module.exports = WallofWonder;
