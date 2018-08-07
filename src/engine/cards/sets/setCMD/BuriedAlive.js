"use strict";
const Constants = require ("../../../Constants");
const BuriedAliveBase = require("../setCM2/BuriedAlive");

class BuriedAlive extends BuriedAliveBase {
  constructor (game) {
    super(game, "Buried Alive", "Commander 2011", "CMD");
  }
}

module.exports = BuriedAlive;
