"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SapseepForestBase = require("../setDDH/SapseepForest.js");

class SapseepForest extends SapseepForestBase {
  constructor(game) {
    super(game, "Sapseep Forest", "Shadowmoor", "SHM");
  }
}

module.exports = SapseepForest;
