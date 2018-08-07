"use strict";
const Constants = require ("../../../Constants");
const CryptCreeperBase = require("../setAVR/CryptCreeper");

class CryptCreeper extends CryptCreeperBase {
  constructor (game) {
    super(game, "Crypt Creeper", "Odyssey", "ODY");
  }
}

module.exports = CryptCreeper;
