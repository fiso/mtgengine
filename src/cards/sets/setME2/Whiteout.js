"use strict";
const Constants = require ("../../../Constants");
const WhiteoutBase = require("../setICE/Whiteout");

class Whiteout extends WhiteoutBase {
  constructor(game) {
    super(game, "Whiteout", "Masters Edition II", "ME2");
  }
}

module.exports = Whiteout;
