"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setMTGA/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, "Serra Angel", "Seventh Edition", "7ED");
  }
}

module.exports = SerraAngel;
