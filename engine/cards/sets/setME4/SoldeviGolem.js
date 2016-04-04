"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoldeviGolemBase = require("../setICE/SoldeviGolem.js");

class SoldeviGolem extends SoldeviGolemBase {
  constructor(game) {
    super(game, "Soldevi Golem", "Masters Edition IV", "ME4");
  }
}

module.exports = SoldeviGolem;
