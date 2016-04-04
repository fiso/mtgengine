"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncrementalBlightBase = require("../setARC/IncrementalBlight.js");

class IncrementalBlight extends IncrementalBlightBase {
  constructor(game) {
    super(game, "Incremental Blight", "Shadowmoor", "SHM");
  }
}

module.exports = IncrementalBlight;
