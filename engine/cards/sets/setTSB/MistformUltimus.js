"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistformUltimusBase = require("../setLGN/MistformUltimus.js");

class MistformUltimus extends MistformUltimusBase {
  constructor(game) {
    super(game, "Mistform Ultimus", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MistformUltimus;
