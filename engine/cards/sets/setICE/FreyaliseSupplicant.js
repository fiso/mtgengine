"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreyaliseSupplicant extends Card {
  constructor(game) {
    super(game, "Freyalise Supplicant", "Ice Age", "ICE");
  }
}

module.exports = FreyaliseSupplicant;
