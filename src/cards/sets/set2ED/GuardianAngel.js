"use strict";
const Constants = require ("../../../Constants");
const GuardianAngelBase = require("../setSUM/GuardianAngel");

class GuardianAngel extends GuardianAngelBase {
  constructor (game) {
    super(game, "Guardian Angel", "Unlimited Edition", "2ED");
  }
}

module.exports = GuardianAngel;
