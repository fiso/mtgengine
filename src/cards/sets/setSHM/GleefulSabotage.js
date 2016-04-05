"use strict";
const Constants = require ("../../../Constants");
const GleefulSabotageBase = require("../setARC/GleefulSabotage");

class GleefulSabotage extends GleefulSabotageBase {
  constructor(game) {
    super(game, "Gleeful Sabotage", "Shadowmoor", "SHM");
  }
}

module.exports = GleefulSabotage;
