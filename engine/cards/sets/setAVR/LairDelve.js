"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LairDelve extends Card {
  constructor(game) {
    super(game, "Lair Delve", "Avacyn Restored", "AVR");
  }
}

module.exports = LairDelve;
