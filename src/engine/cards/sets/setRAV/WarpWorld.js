"use strict";
const Constants = require ("../../../Constants");
const WarpWorldBase = require("../setM10/WarpWorld");

class WarpWorld extends WarpWorldBase {
  constructor (game) {
    super(game, "Warp World", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WarpWorld;
