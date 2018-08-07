"use strict";
const Constants = require ("../../../Constants");
const WrapinFlamesBase = require("../setBBD/WrapinFlames");

class WrapinFlames extends WrapinFlamesBase {
  constructor (game) {
    super(game, "Wrap in Flames", "Conspiracy", "CNS");
  }
}

module.exports = WrapinFlames;
