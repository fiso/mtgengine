"use strict";
const Constants = require ("../../../Constants");
const PsychatogBase = require("../setVMA/Psychatog");

class Psychatog extends PsychatogBase {
  constructor (game) {
    super(game, "Psychatog", "Magic Online Promos", "PRM");
  }
}

module.exports = Psychatog;
