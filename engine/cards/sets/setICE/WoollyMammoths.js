"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoollyMammothsBase = require("../setCST/WoollyMammoths.js");

class WoollyMammoths extends WoollyMammothsBase {
  constructor(game) {
    super(game, "Woolly Mammoths", "Ice Age", "ICE");
  }
}

module.exports = WoollyMammoths;
