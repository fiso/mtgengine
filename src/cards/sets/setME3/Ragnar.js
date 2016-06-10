"use strict";
const Constants = require ("../../../Constants");
const RagnarBase = require("../setLEG/Ragnar");

class Ragnar extends RagnarBase {
  constructor (game) {
    super(game, "Ragnar", "Masters Edition III", "ME3");
  }
}

module.exports = Ragnar;
