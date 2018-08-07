"use strict";
const Constants = require ("../../../Constants");
const TheImmortalSunBase = require("../setPRIX/TheImmortalSun");

class TheImmortalSun extends TheImmortalSunBase {
  constructor (game) {
    super(game, "The Immortal Sun", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TheImmortalSun;
