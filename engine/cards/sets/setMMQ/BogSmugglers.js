"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogSmugglers extends Card {
  constructor(game) {
    super(game, "Bog Smugglers", "Mercadian Masques", "MMQ");
  }
}

module.exports = BogSmugglers;
