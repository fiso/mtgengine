"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Excise extends Card {
  constructor(game) {
    super(game, "Excise", "Prophecy", "PCY");
  }
}

module.exports = Excise;
