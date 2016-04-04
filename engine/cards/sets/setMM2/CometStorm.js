"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CometStormBase = require("../setC15/CometStorm.js");

class CometStorm extends CometStormBase {
  constructor(game) {
    super(game, "Comet Storm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CometStorm;
