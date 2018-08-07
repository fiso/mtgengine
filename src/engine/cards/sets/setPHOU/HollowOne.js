"use strict";
const Constants = require ("../../../Constants");
const HollowOneBase = require("../setHOU/HollowOne");

class HollowOne extends HollowOneBase {
  constructor (game) {
    super(game, "Hollow One", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HollowOne;
