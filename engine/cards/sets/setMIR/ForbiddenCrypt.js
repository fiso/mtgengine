"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddenCryptBase = require("../set6ED/ForbiddenCrypt.js");

class ForbiddenCrypt extends ForbiddenCryptBase {
  constructor(game) {
    super(game, "Forbidden Crypt", "Mirage", "MIR");
  }
}

module.exports = ForbiddenCrypt;
