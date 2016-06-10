"use strict";
const Constants = require ("../../../Constants");
const RubiniaSoulsingerBase = require("../setCHR/RubiniaSoulsinger");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor (game) {
    super(game, "Rubinia Soulsinger", "Legends", "LEG");
  }
}

module.exports = RubiniaSoulsinger;
