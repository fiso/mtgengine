"use strict";
const Constants = require ("../../../Constants");
const ThunderbreakRegentBase = require("../setDTK/ThunderbreakRegent");

class ThunderbreakRegent extends ThunderbreakRegentBase {
  constructor(game) {
    super(game, "Thunderbreak Regent", "Magic Game Day", "pMGD");
  }
}

module.exports = ThunderbreakRegent;
