"use strict";
const Constants = require ("../../../Constants");
const WrapinFlamesBase = require("../setBBD/WrapinFlames");

class WrapinFlames extends WrapinFlamesBase {
  constructor (game) {
    super(game, "Wrap in Flames", "Modern Masters 2015", "MM2");
  }
}

module.exports = WrapinFlames;
