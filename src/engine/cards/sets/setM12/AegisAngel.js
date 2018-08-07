"use strict";
const Constants = require ("../../../Constants");
const AegisAngelBase = require("../setE01/AegisAngel");

class AegisAngel extends AegisAngelBase {
  constructor (game) {
    super(game, "Aegis Angel", "Magic 2012", "M12");
  }
}

module.exports = AegisAngel;
