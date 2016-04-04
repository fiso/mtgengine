"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScentofJasmine extends Card {
  constructor(game) {
    super(game, "Scent of Jasmine", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofJasmine;
