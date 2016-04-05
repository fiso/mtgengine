"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DebtorsKnell extends UnimplementedCard {
  constructor(game) {
    super(game, "Debtors' Knell", "Guildpact", "GPT");
  }
}

module.exports = DebtorsKnell;
