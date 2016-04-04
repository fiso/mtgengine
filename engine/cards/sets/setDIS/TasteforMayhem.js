"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TasteforMayhem extends Card {
  constructor(game) {
    super(game, "Taste for Mayhem", "Dissension", "DIS");
  }
}

module.exports = TasteforMayhem;
