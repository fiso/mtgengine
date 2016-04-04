"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CryptRatsBase = require("../set7ED/CryptRats.js");

class CryptRats extends CryptRatsBase {
  constructor(game) {
    super(game, "Crypt Rats", "Visions", "VIS");
  }
}

module.exports = CryptRats;
