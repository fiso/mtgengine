"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrimazKingofOreskos extends Card {
  constructor(game) {
    super(game, "Brimaz, King of Oreskos", "Born of the Gods", "BNG");
  }
}

module.exports = BrimazKingofOreskos;
