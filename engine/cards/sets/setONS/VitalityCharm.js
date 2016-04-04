"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalityCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Vitality Charm", "Onslaught", "ONS");
  }
}

module.exports = VitalityCharm;
