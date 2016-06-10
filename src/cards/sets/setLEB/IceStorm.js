"use strict";
const Constants = require ("../../../Constants");
const IceStormBase = require("../setCED/IceStorm");

class IceStorm extends IceStormBase {
  constructor (game) {
    super(game, "Ice Storm", "Limited Edition Beta", "LEB");
  }
}

module.exports = IceStorm;
