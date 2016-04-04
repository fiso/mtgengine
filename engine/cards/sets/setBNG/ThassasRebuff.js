"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThassasRebuff extends Card {
  constructor(game) {
    super(game, "Thassa's Rebuff", "Born of the Gods", "BNG");
  }
}

module.exports = ThassasRebuff;
