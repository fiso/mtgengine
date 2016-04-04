"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalismanofIndulgence extends Card {
  constructor(game) {
    super(game, "Talisman of Indulgence", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofIndulgence;
