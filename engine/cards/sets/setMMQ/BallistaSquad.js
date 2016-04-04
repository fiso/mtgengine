"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BallistaSquad extends Card {
  constructor(game) {
    super(game, "Ballista Squad", "Mercadian Masques", "MMQ");
  }
}

module.exports = BallistaSquad;
