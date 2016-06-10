"use strict";
const Constants = require ("../../../Constants");
const UginsConstructBase = require("../setFRF/UginsConstruct");

class UginsConstruct extends UginsConstructBase {
  constructor (game) {
    super(game, "Ugin's Construct", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = UginsConstruct;
