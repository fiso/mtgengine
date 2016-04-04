"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VitalityCharm extends Card {
  constructor(game) {
    super(game, "Vitality Charm", "Onslaught", "ONS");
  }
}

module.exports = VitalityCharm;
