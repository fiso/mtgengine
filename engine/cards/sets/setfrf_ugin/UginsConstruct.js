"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UginsConstructBase = require("../setFRF/UginsConstruct.js");

class UginsConstruct extends UginsConstructBase {
  constructor(game) {
    super(game, "Ugin's Construct", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = UginsConstruct;
