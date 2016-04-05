"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GutturalResponse extends UnimplementedCard {
  constructor(game) {
    super(game, "Guttural Response", "Shadowmoor", "SHM");
  }
}

module.exports = GutturalResponse;
