"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulofRavnicaBase = require("../setM15/SoulofRavnica.js");

class SoulofRavnica extends SoulofRavnicaBase {
  constructor(game) {
    super(game, "Soul of Ravnica", "Media Inserts", "pMEI");
  }
}

module.exports = SoulofRavnica;
