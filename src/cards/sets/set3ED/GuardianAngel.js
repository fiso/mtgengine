"use strict";
const Constants = require ("../../../Constants");
const GuardianAngelBase = require("../setCED/GuardianAngel");

class GuardianAngel extends GuardianAngelBase {
  constructor (game) {
    super(game, "Guardian Angel", "Revised Edition", "3ED");
  }
}

module.exports = GuardianAngel;
