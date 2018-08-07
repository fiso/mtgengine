"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setE01/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Magic 2015", "M15");
  }
}

module.exports = ChandraPyromaster;
