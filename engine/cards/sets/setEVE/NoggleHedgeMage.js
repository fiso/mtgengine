"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoggleHedgeMage extends Card {
  constructor(game) {
    super(game, "Noggle Hedge-Mage", "Eventide", "EVE");
  }
}

module.exports = NoggleHedgeMage;
