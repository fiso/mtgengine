"use strict";
const Constants = require ("../../../Constants");
const GutturalResponseBase = require("../setDDS/GutturalResponse");

class GutturalResponse extends GutturalResponseBase {
  constructor (game) {
    super(game, "Guttural Response", "You Make the Cube", "PZ2");
  }
}

module.exports = GutturalResponse;
