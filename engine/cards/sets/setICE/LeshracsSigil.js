"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeshracsSigil extends Card {
  constructor(game) {
    super(game, "Leshrac's Sigil", "Ice Age", "ICE");
  }
}

module.exports = LeshracsSigil;
