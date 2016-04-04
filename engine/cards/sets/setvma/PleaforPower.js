"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PleaforPowerBase = require("../setCNS/PleaforPower.js");

class PleaforPower extends PleaforPowerBase {
  constructor(game) {
    super(game, "Plea for Power", "Vintage Masters", "VMA");
  }
}

module.exports = PleaforPower;
