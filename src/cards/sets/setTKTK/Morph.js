"use strict";
const Constants = require ("../../../Constants");
const MorphBase = require("../setTA25/Morph");

class Morph extends MorphBase {
  constructor (game) {
    super(game, "Morph", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = Morph;
