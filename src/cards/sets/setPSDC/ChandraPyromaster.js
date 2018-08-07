"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setE01/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "San Diego Comic-Con 2013", "PSDC");
  }
}

module.exports = ChandraPyromaster;
