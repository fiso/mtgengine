"use strict";
const Constants = require ("../../../Constants");
const AnyaMercilessAngelBase = require("../setCM2/AnyaMercilessAngel");

class AnyaMercilessAngel extends AnyaMercilessAngelBase {
  constructor (game) {
    super(game, "Anya, Merciless Angel", "Legendary Cube", "PZ1");
  }
}

module.exports = AnyaMercilessAngel;
