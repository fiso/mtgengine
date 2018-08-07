"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setMTGA/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor (game) {
    super(game, "Serra Angel", "Magic 2010", "M10");
  }
}

module.exports = SerraAngel;
