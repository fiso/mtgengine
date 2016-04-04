"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceStormBase = require("../setCED/IceStorm.js");

class IceStorm extends IceStormBase {
  constructor(game) {
    super(game, "Ice Storm", "Unlimited Edition", "2ED");
  }
}

module.exports = IceStorm;
