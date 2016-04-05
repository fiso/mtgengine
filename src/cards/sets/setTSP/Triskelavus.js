"use strict";
const Constants = require ("../../../Constants");
const TriskelavusBase = require("../setCMD/Triskelavus");

class Triskelavus extends TriskelavusBase {
  constructor(game) {
    super(game, "Triskelavus", "Time Spiral", "TSP");
  }
}

module.exports = Triskelavus;
