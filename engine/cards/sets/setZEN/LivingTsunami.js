"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingTsunami extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Tsunami", "Zendikar", "ZEN");
  }
}

module.exports = LivingTsunami;
