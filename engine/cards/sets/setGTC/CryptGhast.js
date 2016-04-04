"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryptGhastBase = require("../setC14/CryptGhast.js");

class CryptGhast extends CryptGhastBase {
  constructor(game) {
    super(game, "Crypt Ghast", "Gatecrash", "GTC");
  }
}

module.exports = CryptGhast;
