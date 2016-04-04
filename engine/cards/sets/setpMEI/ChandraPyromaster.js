"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandraPyromasterBase = require("../setM14/ChandraPyromaster.js");

class ChandraPyromaster extends ChandraPyromasterBase {
  constructor(game) {
    super(game, "Chandra, Pyromaster", "Media Inserts", "pMEI");
  }
}

module.exports = ChandraPyromaster;
