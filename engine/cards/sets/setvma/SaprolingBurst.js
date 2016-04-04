"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaprolingBurstBase = require("../setNMS/SaprolingBurst.js");

class SaprolingBurst extends SaprolingBurstBase {
  constructor(game) {
    super(game, "Saproling Burst", "Vintage Masters", "VMA");
  }
}

module.exports = SaprolingBurst;
