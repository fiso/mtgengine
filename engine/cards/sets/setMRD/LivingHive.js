"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingHive extends Card {
  constructor(game) {
    super(game, "Living Hive", "Mirrodin", "MRD");
  }
}

module.exports = LivingHive;
