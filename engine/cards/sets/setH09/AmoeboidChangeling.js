"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmoeboidChangelingBase = require("../setLRW/AmoeboidChangeling.js");

class AmoeboidChangeling extends AmoeboidChangelingBase {
  constructor(game) {
    super(game, "Amoeboid Changeling", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = AmoeboidChangeling;
