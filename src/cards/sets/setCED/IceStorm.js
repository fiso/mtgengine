"use strict";
const Constants = require ("../../../Constants");
const IceStormBase = require("../setMED/IceStorm");

class IceStorm extends IceStormBase {
  constructor (game) {
    super(game, "Ice Storm", "Collectors’ Edition", "CED");
  }
}

module.exports = IceStorm;
