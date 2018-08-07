"use strict";
const Constants = require ("../../../Constants");
const StairstoInfinityBase = require("../setPCA/StairstoInfinity");

class StairstoInfinity extends StairstoInfinityBase {
  constructor (game) {
    super(game, "Stairs to Infinity", "Magic Online Promos", "PRM");
  }
}

module.exports = StairstoInfinity;
