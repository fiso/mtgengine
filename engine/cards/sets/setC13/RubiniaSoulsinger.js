"use strict";
const Constants = require ("../../../Constants");
const RubiniaSoulsingerBase = require("../setCHR/RubiniaSoulsinger");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor(game) {
    super(game, "Rubinia Soulsinger", "Commander 2013 Edition", "C13");
  }
}

module.exports = RubiniaSoulsinger;
