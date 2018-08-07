"use strict";
const Constants = require ("../../../Constants");
const DeadeyeNavigatorBase = require("../setMM3/DeadeyeNavigator");

class DeadeyeNavigator extends DeadeyeNavigatorBase {
  constructor (game) {
    super(game, "Deadeye Navigator", "Avacyn Restored", "AVR");
  }
}

module.exports = DeadeyeNavigator;
