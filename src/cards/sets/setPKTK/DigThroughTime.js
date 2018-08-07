"use strict";
const Constants = require ("../../../Constants");
const DigThroughTimeBase = require("../setKTK/DigThroughTime");

class DigThroughTime extends DigThroughTimeBase {
  constructor (game) {
    super(game, "Dig Through Time", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = DigThroughTime;
