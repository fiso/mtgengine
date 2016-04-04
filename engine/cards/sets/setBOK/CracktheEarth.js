"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CracktheEarth extends Card {
  constructor(game) {
    super(game, "Crack the Earth", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CracktheEarth;
