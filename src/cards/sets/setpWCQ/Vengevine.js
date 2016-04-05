"use strict";
const Constants = require ("../../../Constants");
const VengevineBase = require("../setROE/Vengevine");

class Vengevine extends VengevineBase {
  constructor(game) {
    super(game, "Vengevine", "World Magic Cup Qualifiers", "pWCQ");
  }
}

module.exports = Vengevine;
