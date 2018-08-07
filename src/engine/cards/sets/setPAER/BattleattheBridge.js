"use strict";
const Constants = require ("../../../Constants");
const BattleattheBridgeBase = require("../setAER/BattleattheBridge");

class BattleattheBridge extends BattleattheBridgeBase {
  constructor (game) {
    super(game, "Battle at the Bridge", "Aether Revolt Promos", "PAER");
  }
}

module.exports = BattleattheBridge;
