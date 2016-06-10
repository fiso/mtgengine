"use strict";
const Constants = require ("../../../Constants");
const DigThroughTimeBase = require("../setKTK/DigThroughTime");

class DigThroughTime extends DigThroughTimeBase {
  constructor (game) {
    super(game, "Dig Through Time", "Prerelease Events", "pPRE");
  }
}

module.exports = DigThroughTime;
