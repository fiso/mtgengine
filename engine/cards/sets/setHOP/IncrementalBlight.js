"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncrementalBlightBase = require("../setARC/IncrementalBlight.js");

class IncrementalBlight extends IncrementalBlightBase {
  constructor(game) {
    super(game, "Incremental Blight", "Planechase", "HOP");
  }
}

module.exports = IncrementalBlight;
