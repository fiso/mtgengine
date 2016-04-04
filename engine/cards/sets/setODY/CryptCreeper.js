"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryptCreeperBase = require("../setAVR/CryptCreeper.js");

class CryptCreeper extends CryptCreeperBase {
  constructor(game) {
    super(game, "Crypt Creeper", "Odyssey", "ODY");
  }
}

module.exports = CryptCreeper;
