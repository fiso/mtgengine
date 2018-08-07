"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setVMA/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "Magic Player Rewards 2005", "P05");
  }
}

module.exports = Psychatog;
