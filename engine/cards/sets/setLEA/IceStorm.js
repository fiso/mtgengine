"use strict";
const Constants = require ("../../../Constants");
const IceStormBase = require("../setCED/IceStorm");

class IceStorm extends IceStormBase {
  constructor(game) {
    super(game, "Ice Storm", "Limited Edition Alpha", "LEA");
  }
}

module.exports = IceStorm;
