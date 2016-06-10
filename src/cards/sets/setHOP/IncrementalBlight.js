"use strict";
const Constants = require ("../../../Constants");
const IncrementalBlightBase = require("../setARC/IncrementalBlight");

class IncrementalBlight extends IncrementalBlightBase {
  constructor (game) {
    super(game, "Incremental Blight", "Planechase", "HOP");
  }
}

module.exports = IncrementalBlight;
