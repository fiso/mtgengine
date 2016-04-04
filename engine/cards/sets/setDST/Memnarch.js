"use strict";
const Constants = require ("../../../Constants");
const MemnarchBase = require("../setARC/Memnarch");

class Memnarch extends MemnarchBase {
  constructor(game) {
    super(game, "Memnarch", "Darksteel", "DST");
  }
}

module.exports = Memnarch;
