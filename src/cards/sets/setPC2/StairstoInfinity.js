"use strict";
const Constants = require ("../../../Constants");
const StairstoInfinityBase = require("../setPCA/StairstoInfinity");

class StairstoInfinity extends StairstoInfinityBase {
  constructor (game) {
    super(game, "Stairs to Infinity", "Planechase 2012", "PC2");
  }
}

module.exports = StairstoInfinity;
