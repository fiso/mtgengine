"use strict";
const Constants = require ("../../../Constants");
const GuardianAngelBase = require("../setCED/GuardianAngel");

class GuardianAngel extends GuardianAngelBase {
  constructor(game) {
    super(game, "Guardian Angel", "International Collector's Edition", "CEI");
  }
}

module.exports = GuardianAngel;
