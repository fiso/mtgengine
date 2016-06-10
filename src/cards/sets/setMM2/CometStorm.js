"use strict";
const Constants = require ("../../../Constants");
const CometStormBase = require("../setC15/CometStorm");

class CometStorm extends CometStormBase {
  constructor (game) {
    super(game, "Comet Storm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CometStorm;
