"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LivingHiveBase = require("../setMRD/LivingHive.js");

class LivingHive extends LivingHiveBase {
  constructor(game) {
    super(game, "Living Hive", "Planechase", "HOP");
  }
}

module.exports = LivingHive;
