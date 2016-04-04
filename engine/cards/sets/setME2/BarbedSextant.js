"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarbedSextantBase = require("../setCST/BarbedSextant.js");

class BarbedSextant extends BarbedSextantBase {
  constructor(game) {
    super(game, "Barbed Sextant", "Masters Edition II", "ME2");
  }
}

module.exports = BarbedSextant;
