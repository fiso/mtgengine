"use strict";
const Constants = require ("../../../Constants");
const LivingHiveBase = require("../setMRD/LivingHive");

class LivingHive extends LivingHiveBase {
  constructor(game) {
    super(game, "Living Hive", "Planechase", "HOP");
  }
}

module.exports = LivingHive;
