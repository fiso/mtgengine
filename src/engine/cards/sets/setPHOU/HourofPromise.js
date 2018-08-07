"use strict";
const Constants = require ("../../../Constants");
const HourofPromiseBase = require("../setHOU/HourofPromise");

class HourofPromise extends HourofPromiseBase {
  constructor (game) {
    super(game, "Hour of Promise", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HourofPromise;
