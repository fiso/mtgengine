"use strict";
const Constants = require ("../../../Constants");
const MorphBase = require("../setTA25/Morph");

class Morph extends MorphBase {
  constructor (game) {
    super(game, "Morph", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = Morph;
