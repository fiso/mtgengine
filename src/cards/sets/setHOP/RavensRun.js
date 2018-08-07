"use strict";
const Constants = require ("../../../Constants");
const RavensRunBase = require("../setPCA/RavensRun");

class RavensRun extends RavensRunBase {
  constructor (game) {
    super(game, "Raven's Run", "Planechase", "HOP");
  }
}

module.exports = RavensRun;
