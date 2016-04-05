"use strict";
const Constants = require ("../../../Constants");
const SaprolingBurstBase = require("../setNMS/SaprolingBurst");

class SaprolingBurst extends SaprolingBurstBase {
  constructor(game) {
    super(game, "Saproling Burst", "Vintage Masters", "VMA");
  }
}

module.exports = SaprolingBurst;
