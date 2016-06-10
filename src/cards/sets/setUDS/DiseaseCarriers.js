"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiseaseCarriers extends UnimplementedCard {
  constructor (game) {
    super(game, "Disease Carriers", "Urza's Destiny", "UDS");
  }
}

module.exports = DiseaseCarriers;
