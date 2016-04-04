"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarielReckonerofSoulsBase = require("../setV15/TarielReckonerofSouls.js");

class TarielReckonerofSouls extends TarielReckonerofSoulsBase {
  constructor(game) {
    super(game, "Tariel, Reckoner of Souls", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TarielReckonerofSouls;
