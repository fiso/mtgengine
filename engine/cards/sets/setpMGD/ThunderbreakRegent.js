"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderbreakRegentBase = require("../setDTK/ThunderbreakRegent.js");

class ThunderbreakRegent extends ThunderbreakRegentBase {
  constructor(game) {
    super(game, "Thunderbreak Regent", "Magic Game Day", "pMGD");
  }
}

module.exports = ThunderbreakRegent;
