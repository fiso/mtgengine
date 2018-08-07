"use strict";
const Constants = require ("../../../Constants");
const GuardianAngelBase = require("../setSUM/GuardianAngel");

class GuardianAngel extends GuardianAngelBase {
  constructor (game) {
    super(game, "Guardian Angel", "Collectors’ Edition", "CED");
  }
}

module.exports = GuardianAngel;
