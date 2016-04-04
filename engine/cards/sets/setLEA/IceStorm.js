"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceStormBase = require("../setCED/IceStorm.js");

class IceStorm extends IceStormBase {
  constructor(game) {
    super(game, "Ice Storm", "Limited Edition Alpha", "LEA");
  }
}

module.exports = IceStorm;
