"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setM14/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ChandraPyromaster;
