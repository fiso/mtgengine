"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SporeCloudBase = require("../setFEM/SporeCloud.js");

class SporeCloud extends SporeCloudBase {
  constructor(game) {
    super(game, "Spore Cloud", "Masters Edition II", "ME2");
  }
}

module.exports = SporeCloud;
