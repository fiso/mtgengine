"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalismanofProgress extends Card {
  constructor(game) {
    super(game, "Talisman of Progress", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofProgress;
