"use strict";
const Constants = require ("../../../Constants");
const RubiniaSoulsingerBase = require("../setCMA/RubiniaSoulsinger");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor (game) {
    super(game, "Rubinia Soulsinger", "Commander 2013", "C13");
  }
}

module.exports = RubiniaSoulsinger;
