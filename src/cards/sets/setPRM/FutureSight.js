"use strict";
const Constants = require ("../../../Constants");
const FutureSightBase = require("../setEMA/FutureSight");

class FutureSight extends FutureSightBase {
  constructor (game) {
    super(game, "Future Sight", "Magic Online Promos", "PRM");
  }
}

module.exports = FutureSight;
