"use strict";
const Constants = require ("../../../Constants");
const CryptGhastBase = require("../setC14/CryptGhast");

class CryptGhast extends CryptGhastBase {
  constructor(game) {
    super(game, "Crypt Ghast", "Gatecrash", "GTC");
  }
}

module.exports = CryptGhast;
