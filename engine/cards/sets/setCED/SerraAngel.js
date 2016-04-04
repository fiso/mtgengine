"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setATH/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor(game) {
    super(game, "Serra Angel", "Collector's Edition", "CED");
  }
}

module.exports = SerraAngel;
