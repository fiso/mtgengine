"use strict";
const Constants = require ("../../../Constants");
const ForbiddenCryptBase = require("../set6ED/ForbiddenCrypt");

class ForbiddenCrypt extends ForbiddenCryptBase {
  constructor (game) {
    super(game, "Forbidden Crypt", "Mirage", "MIR");
  }
}

module.exports = ForbiddenCrypt;
