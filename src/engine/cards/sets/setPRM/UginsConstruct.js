"use strict";
const Constants = require ("../../../Constants");
const UginsConstructBase = require("../setFRF/UginsConstruct");

class UginsConstruct extends UginsConstructBase {
  constructor (game) {
    super(game, "Ugin's Construct", "Magic Online Promos", "PRM");
  }
}

module.exports = UginsConstruct;
