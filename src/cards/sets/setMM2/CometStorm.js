"use strict";
const Constants = require ("../../../Constants");
const CometStormBase = require("../setC17/CometStorm");

class CometStorm extends CometStormBase {
  constructor (game) {
    super(game, "Comet Storm", "Modern Masters 2015", "MM2");
  }
}

module.exports = CometStorm;
