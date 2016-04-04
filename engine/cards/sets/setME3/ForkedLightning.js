"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForkedLightning extends Card {
  constructor(game) {
    super(game, "Forked Lightning", "Masters Edition III", "ME3");
  }
}

module.exports = ForkedLightning;
