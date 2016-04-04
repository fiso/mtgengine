"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GleefulSabotageBase = require("../setARC/GleefulSabotage.js");

class GleefulSabotage extends GleefulSabotageBase {
  constructor(game) {
    super(game, "Gleeful Sabotage", "Shadowmoor", "SHM");
  }
}

module.exports = GleefulSabotage;
