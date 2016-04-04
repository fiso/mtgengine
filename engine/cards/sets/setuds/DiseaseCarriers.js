"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiseaseCarriers extends Card {
  constructor(game) {
    super(game, "Disease Carriers", "Urza's Destiny", "UDS");
  }
}

module.exports = DiseaseCarriers;
