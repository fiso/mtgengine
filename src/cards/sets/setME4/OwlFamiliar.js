"use strict";
const Constants = require ("../../../Constants");
const OwlFamiliarBase = require("../setVMA/OwlFamiliar");

class OwlFamiliar extends OwlFamiliarBase {
  constructor (game) {
    super(game, "Owl Familiar", "Masters Edition IV", "ME4");
  }
}

module.exports = OwlFamiliar;
