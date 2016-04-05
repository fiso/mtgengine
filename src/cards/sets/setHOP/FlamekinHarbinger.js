"use strict";
const Constants = require ("../../../Constants");
const FlamekinHarbingerBase = require("../setLRW/FlamekinHarbinger");

class FlamekinHarbinger extends FlamekinHarbingerBase {
  constructor(game) {
    super(game, "Flamekin Harbinger", "Planechase", "HOP");
  }
}

module.exports = FlamekinHarbinger;
