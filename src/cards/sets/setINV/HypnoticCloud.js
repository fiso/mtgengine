"use strict";
const Constants = require ("../../../Constants");
const HypnoticCloudBase = require("../setDDM/HypnoticCloud");

class HypnoticCloud extends HypnoticCloudBase {
  constructor(game) {
    super(game, "Hypnotic Cloud", "Invasion", "INV");
  }
}

module.exports = HypnoticCloud;
