"use strict";
const Constants = require ("../../../Constants");
const GutturalResponseBase = require("../setDDS/GutturalResponse");

class GutturalResponse extends GutturalResponseBase {
  constructor (game) {
    super(game, "Guttural Response", "Shadowmoor", "SHM");
  }
}

module.exports = GutturalResponse;
