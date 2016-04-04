"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OwlFamiliarBase = require("../setME4/OwlFamiliar.js");

class OwlFamiliar extends OwlFamiliarBase {
  constructor(game) {
    super(game, "Owl Familiar", "Portal", "POR");
  }
}

module.exports = OwlFamiliar;
