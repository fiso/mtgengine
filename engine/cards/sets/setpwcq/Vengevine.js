"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VengevineBase = require("../setROE/Vengevine.js");

class Vengevine extends VengevineBase {
  constructor(game) {
    super(game, "Vengevine", "World Magic Cup Qualifiers", "pWCQ");
  }
}

module.exports = Vengevine;
