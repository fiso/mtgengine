"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulswornJury extends Card {
  constructor(game) {
    super(game, "Soulsworn Jury", "Dissension", "DIS");
  }
}

module.exports = SoulswornJury;
