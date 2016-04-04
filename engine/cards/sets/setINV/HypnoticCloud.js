"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HypnoticCloudBase = require("../setDDM/HypnoticCloud.js");

class HypnoticCloud extends HypnoticCloudBase {
  constructor(game) {
    super(game, "Hypnotic Cloud", "Invasion", "INV");
  }
}

module.exports = HypnoticCloud;
