"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TalarasBattalionBase = require("../setDPA/TalarasBattalion.js");

class TalarasBattalion extends TalarasBattalionBase {
  constructor(game) {
    super(game, "Talara's Battalion", "Eventide", "EVE");
  }
}

module.exports = TalarasBattalion;
