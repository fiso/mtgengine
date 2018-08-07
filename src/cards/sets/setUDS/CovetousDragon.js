"use strict";
const Constants = require ("../../../Constants");
const CovetousDragonBase = require("../setWC99/CovetousDragon");

class CovetousDragon extends CovetousDragonBase {
  constructor (game) {
    super(game, "Covetous Dragon", "Urza's Destiny", "UDS");
  }
}

module.exports = CovetousDragon;
