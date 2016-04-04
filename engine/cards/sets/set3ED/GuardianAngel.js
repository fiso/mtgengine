"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardianAngelBase = require("../setCED/GuardianAngel.js");

class GuardianAngel extends GuardianAngelBase {
  constructor(game) {
    super(game, "Guardian Angel", "Revised Edition", "3ED");
  }
}

module.exports = GuardianAngel;
