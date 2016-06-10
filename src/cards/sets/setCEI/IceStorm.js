"use strict";
const Constants = require ("../../../Constants");
const IceStormBase = require("../setCED/IceStorm");

class IceStorm extends IceStormBase {
  constructor (game) {
    super(game, "Ice Storm", "International Collector's Edition", "CEI");
  }
}

module.exports = IceStorm;
