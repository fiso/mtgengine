"use strict";
const Constants = require ("../../../Constants");
const EndlessSandsBase = require("../setHOU/EndlessSands");

class EndlessSands extends EndlessSandsBase {
  constructor (game) {
    super(game, "Endless Sands", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = EndlessSands;
