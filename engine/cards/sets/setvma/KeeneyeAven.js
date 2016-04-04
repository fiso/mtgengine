"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeeneyeAvenBase = require("../setLGN/KeeneyeAven.js");

class KeeneyeAven extends KeeneyeAvenBase {
  constructor(game) {
    super(game, "Keeneye Aven", "Vintage Masters", "VMA");
  }
}

module.exports = KeeneyeAven;
