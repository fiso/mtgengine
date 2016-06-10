"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setpMPR/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "Odyssey", "ODY");
  }
}

module.exports = Psychatog;
