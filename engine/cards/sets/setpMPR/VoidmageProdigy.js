"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidmageProdigy extends Card {
  constructor(game) {
    super(game, "Voidmage Prodigy", "Magic Player Rewards", "pMPR");
  }
}

module.exports = VoidmageProdigy;
