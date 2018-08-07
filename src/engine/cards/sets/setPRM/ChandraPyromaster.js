"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setE01/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Magic Online Promos", "PRM");
  }
}

module.exports = ChandraPyromaster;
