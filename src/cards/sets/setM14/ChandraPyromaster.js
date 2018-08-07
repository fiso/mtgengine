"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setE01/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Magic 2014", "M14");
  }
}

module.exports = ChandraPyromaster;
