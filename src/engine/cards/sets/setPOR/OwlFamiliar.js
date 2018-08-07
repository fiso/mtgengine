"use strict";
const Constants = require ("../../../Constants");
const OwlFamiliarBase = require("../setVMA/OwlFamiliar");

class OwlFamiliar extends OwlFamiliarBase {
  constructor (game) {
    super(game, "Owl Familiar", "Portal", "POR");
  }
}

module.exports = OwlFamiliar;
