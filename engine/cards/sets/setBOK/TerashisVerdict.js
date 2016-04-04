"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerashisVerdict extends Card {
  constructor(game) {
    super(game, "Terashi's Verdict", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = TerashisVerdict;
