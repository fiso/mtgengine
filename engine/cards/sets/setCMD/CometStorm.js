"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CometStormBase = require("../setC15/CometStorm.js");

class CometStorm extends CometStormBase {
  constructor(game) {
    super(game, "Comet Storm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CometStorm;
