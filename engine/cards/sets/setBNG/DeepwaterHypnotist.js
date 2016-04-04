"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepwaterHypnotist extends Card {
  constructor(game) {
    super(game, "Deepwater Hypnotist", "Born of the Gods", "BNG");
  }
}

module.exports = DeepwaterHypnotist;
