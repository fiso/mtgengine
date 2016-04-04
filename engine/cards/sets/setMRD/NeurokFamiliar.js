"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokFamiliar extends Card {
  constructor(game) {
    super(game, "Neurok Familiar", "Mirrodin", "MRD");
  }
}

module.exports = NeurokFamiliar;
