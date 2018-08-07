"use strict";
const Constants = require ("../../../Constants");
const MinotaurBase = require("../setTJOU/Minotaur");

class Minotaur extends MinotaurBase {
  constructor (game) {
    super(game, "Minotaur", "League Tokens 2014", "L14");
  }
}

module.exports = Minotaur;
