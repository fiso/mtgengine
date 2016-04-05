"use strict";
const Constants = require ("../../../Constants");
const AegisAngelBase = require("../setM12/AegisAngel");

class AegisAngel extends AegisAngelBase {
  constructor(game) {
    super(game, "Aegis Angel", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AegisAngel;
