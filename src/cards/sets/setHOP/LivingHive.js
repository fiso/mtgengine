"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingHive extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Hive", "Planechase", "HOP");
  }
}

module.exports = LivingHive;
