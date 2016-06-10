"use strict";
const Constants = require ("../../../Constants");
const WrapinFlamesBase = require("../setCNS/WrapinFlames");

class WrapinFlames extends WrapinFlamesBase {
  constructor (game) {
    super(game, "Wrap in Flames", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = WrapinFlames;
