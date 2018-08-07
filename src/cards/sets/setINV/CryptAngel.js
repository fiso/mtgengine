"use strict";
const Constants = require ("../../../Constants");
const CryptAngelBase = require("../setWC01/CryptAngel");

class CryptAngel extends CryptAngelBase {
  constructor (game) {
    super(game, "Crypt Angel", "Invasion", "INV");
  }
}

module.exports = CryptAngel;
