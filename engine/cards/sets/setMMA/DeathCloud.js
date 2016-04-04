"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathCloudBase = require("../setDST/DeathCloud.js");

class DeathCloud extends DeathCloudBase {
  constructor(game) {
    super(game, "Death Cloud", "Modern Masters", "MMA");
  }
}

module.exports = DeathCloud;
