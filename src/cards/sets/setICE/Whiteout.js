"use strict";
const Constants = require ("../../../Constants");
const WhiteoutBase = require("../setME2/Whiteout");

class Whiteout extends WhiteoutBase {
  constructor (game) {
    super(game, "Whiteout", "Ice Age", "ICE");
  }
}

module.exports = Whiteout;
