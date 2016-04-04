"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MidnightDuelist extends Card {
  constructor(game) {
    super(game, "Midnight Duelist", "Avacyn Restored", "AVR");
  }
}

module.exports = MidnightDuelist;
