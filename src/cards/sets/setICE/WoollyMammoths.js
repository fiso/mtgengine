"use strict";
const Constants = require ("../../../Constants");
const WoollyMammothsBase = require("../setCST/WoollyMammoths");

class WoollyMammoths extends WoollyMammothsBase {
  constructor (game) {
    super(game, "Woolly Mammoths", "Ice Age", "ICE");
  }
}

module.exports = WoollyMammoths;
