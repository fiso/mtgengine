"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DebtorsKnell extends Card {
  constructor(game) {
    super(game, "Debtors' Knell", "Guildpact", "GPT");
  }
}

module.exports = DebtorsKnell;
