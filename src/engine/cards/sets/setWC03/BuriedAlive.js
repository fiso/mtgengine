"use strict";
const Constants = require ("../../../Constants");
const BuriedAliveBase = require("../setCM2/BuriedAlive");

class BuriedAlive extends BuriedAliveBase {
  constructor (game) {
    super(game, "Buried Alive", "World Championship Decks 2003", "WC03");
  }
}

module.exports = BuriedAlive;
