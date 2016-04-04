"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CraterHellionBase = require("../setC13/CraterHellion.js");

class CraterHellion extends CraterHellionBase {
  constructor(game) {
    super(game, "Crater Hellion", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CraterHellion;
