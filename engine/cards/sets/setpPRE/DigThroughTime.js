"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DigThroughTimeBase = require("../setKTK/DigThroughTime.js");

class DigThroughTime extends DigThroughTimeBase {
  constructor(game) {
    super(game, "Dig Through Time", "Prerelease Events", "pPRE");
  }
}

module.exports = DigThroughTime;
