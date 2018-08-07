"use strict";
const Constants = require ("../../../Constants");
const IceStormBase = require("../setMED/IceStorm");

class IceStorm extends IceStormBase {
  constructor (game) {
    super(game, "Ice Storm", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = IceStorm;
