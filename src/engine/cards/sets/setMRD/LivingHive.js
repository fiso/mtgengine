"use strict";
const Constants = require ("../../../Constants");
const LivingHiveBase = require("../setHOP/LivingHive");

class LivingHive extends LivingHiveBase {
  constructor (game) {
    super(game, "Living Hive", "Mirrodin", "MRD");
  }
}

module.exports = LivingHive;
