"use strict";
const Constants = require ("../../../Constants");
const UrborgBase = require("../setLEG/Urborg");

class Urborg extends UrborgBase {
  constructor(game) {
    super(game, "Urborg", "Masters Edition III", "ME3");
  }
}

module.exports = Urborg;
