"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CometStormBase = require("../setC15/CometStorm.js");

class CometStorm extends CometStormBase {
  constructor(game) {
    super(game, "Comet Storm", "Prerelease Events", "pPRE");
  }
}

module.exports = CometStorm;
