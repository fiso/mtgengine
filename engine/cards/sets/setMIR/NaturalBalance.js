"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalBalance extends Card {
  constructor(game) {
    super(game, "Natural Balance", "Mirage", "MIR");
  }
}

module.exports = NaturalBalance;
