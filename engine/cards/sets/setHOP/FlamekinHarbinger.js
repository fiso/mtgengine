"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamekinHarbingerBase = require("../setLRW/FlamekinHarbinger.js");

class FlamekinHarbinger extends FlamekinHarbingerBase {
  constructor(game) {
    super(game, "Flamekin Harbinger", "Planechase", "HOP");
  }
}

module.exports = FlamekinHarbinger;
