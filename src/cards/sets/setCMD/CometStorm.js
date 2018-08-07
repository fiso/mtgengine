"use strict";
const Constants = require ("../../../Constants");
const CometStormBase = require("../setC17/CometStorm");

class CometStorm extends CometStormBase {
  constructor (game) {
    super(game, "Comet Storm", "Commander 2011", "CMD");
  }
}

module.exports = CometStorm;
