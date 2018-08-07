"use strict";
const Constants = require ("../../../Constants");
const IllusoryAngelBase = require("../setIMA/IllusoryAngel");

class IllusoryAngel extends IllusoryAngelBase {
  constructor (game) {
    super(game, "Illusory Angel", "Planechase Anthology", "PCA");
  }
}

module.exports = IllusoryAngel;
