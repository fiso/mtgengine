"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KessigRecluse extends Card {
  constructor(game) {
    super(game, "Kessig Recluse", "Dark Ascension", "DKA");
  }
}

module.exports = KessigRecluse;
