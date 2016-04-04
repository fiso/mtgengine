"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneSplinters extends Card {
  constructor(game) {
    super(game, "Bone Splinters", "Avacyn Restored", "AVR");
  }
}

module.exports = BoneSplinters;
