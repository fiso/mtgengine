"use strict";
const Constants = require ("../../../Constants");
const RubiniaSoulsingerBase = require("../setCHR/RubiniaSoulsinger");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor (game) {
    super(game, "Rubinia Soulsinger", "Masters Edition III", "ME3");
  }
}

module.exports = RubiniaSoulsinger;
