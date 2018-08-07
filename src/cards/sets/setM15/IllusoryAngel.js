"use strict";
const Constants = require ("../../../Constants");
const IllusoryAngelBase = require("../setIMA/IllusoryAngel");

class IllusoryAngel extends IllusoryAngelBase {
  constructor (game) {
    super(game, "Illusory Angel", "Magic 2015", "M15");
  }
}

module.exports = IllusoryAngel;
