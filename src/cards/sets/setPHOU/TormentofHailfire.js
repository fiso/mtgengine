"use strict";
const Constants = require ("../../../Constants");
const TormentofHailfireBase = require("../setHOU/TormentofHailfire");

class TormentofHailfire extends TormentofHailfireBase {
  constructor (game) {
    super(game, "Torment of Hailfire", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = TormentofHailfire;
