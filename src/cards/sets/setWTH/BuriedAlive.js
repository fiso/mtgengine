"use strict";
const Constants = require ("../../../Constants");
const BuriedAliveBase = require("../setCM2/BuriedAlive");

class BuriedAlive extends BuriedAliveBase {
  constructor (game) {
    super(game, "Buried Alive", "Weatherlight", "WTH");
  }
}

module.exports = BuriedAlive;
