"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setpMPR/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "Vintage Masters", "VMA");
  }
}

module.exports = Psychatog;
