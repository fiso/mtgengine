"use strict";
const Constants = require ("../../../Constants");
const PleaforPowerBase = require("../setCNS/PleaforPower");

class PleaforPower extends PleaforPowerBase {
  constructor(game) {
    super(game, "Plea for Power", "Vintage Masters", "VMA");
  }
}

module.exports = PleaforPower;
