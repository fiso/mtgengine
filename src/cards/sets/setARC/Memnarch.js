"use strict";
const Constants = require ("../../../Constants");
const MemnarchBase = require("../setV16/Memnarch");

class Memnarch extends MemnarchBase {
  constructor (game) {
    super(game, "Memnarch", "Archenemy", "ARC");
  }
}

module.exports = Memnarch;
