"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setVMA/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "Odyssey", "ODY");
  }
}

module.exports = Psychatog;
