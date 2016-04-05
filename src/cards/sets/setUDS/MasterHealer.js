"use strict";
const Constants = require ("../../../Constants");
const MasterHealerBase = require("../set8ED/MasterHealer");

class MasterHealer extends MasterHealerBase {
  constructor(game) {
    super(game, "Master Healer", "Urza's Destiny", "UDS");
  }
}

module.exports = MasterHealer;
