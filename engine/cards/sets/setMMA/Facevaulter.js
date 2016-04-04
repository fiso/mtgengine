"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FacevaulterBase = require("../setLRW/Facevaulter.js");

class Facevaulter extends FacevaulterBase {
  constructor(game) {
    super(game, "Facevaulter", "Modern Masters", "MMA");
  }
}

module.exports = Facevaulter;
