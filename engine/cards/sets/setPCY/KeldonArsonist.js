"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonArsonist extends Card {
  constructor(game) {
    super(game, "Keldon Arsonist", "Prophecy", "PCY");
  }
}

module.exports = KeldonArsonist;
