"use strict";
const Constants = require ("../../../Constants");
const PleaforPowerBase = require("../setVMA/PleaforPower");

class PleaforPower extends PleaforPowerBase {
  constructor (game) {
    super(game, "Plea for Power", "Conspiracy", "CNS");
  }
}

module.exports = PleaforPower;
