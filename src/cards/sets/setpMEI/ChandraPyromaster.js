"use strict";
const Constants = require ("../../../Constants");
const ChandraPyromasterBase = require("../setM14/ChandraPyromaster");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Media Inserts", "pMEI");
  }
}

module.exports = ChandraPyromaster;
