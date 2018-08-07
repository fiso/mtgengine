"use strict";
const Constants = require ("../../../Constants");
const RagnarBase = require("../setME3/Ragnar");

class Ragnar extends RagnarBase {
  constructor (game) {
    super(game, "Ragnar", "Legends", "LEG");
  }
}

module.exports = Ragnar;
