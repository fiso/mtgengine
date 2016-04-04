"use strict";
const Constants = require ("../../../Constants");
const SerraAngelBase = require("../setATH/SerraAngel");

class SerraAngel extends SerraAngelBase {
  constructor(game) {
    super(game, "Serra Angel", "Magic 2011", "M11");
  }
}

module.exports = SerraAngel;
