"use strict";
const Constants = require ("../../../Constants");
const FlamekinHarbingerBase = require("../setHOP/FlamekinHarbinger");

class FlamekinHarbinger extends FlamekinHarbingerBase {
  constructor (game) {
    super(game, "Flamekin Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinHarbinger;
