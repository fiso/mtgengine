"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalterBase = require("../setUSG/Falter.js");

class Falter extends FalterBase {
  constructor(game) {
    super(game, "Falter", "Vintage Masters", "VMA");
  }
}

module.exports = Falter;
