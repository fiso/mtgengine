"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IllusoryAngelBase = require("../setM15/IllusoryAngel.js");

class IllusoryAngel extends IllusoryAngelBase {
  constructor(game) {
    super(game, "Illusory Angel", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = IllusoryAngel;
