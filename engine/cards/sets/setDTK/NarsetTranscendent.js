"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NarsetTranscendent extends Card {
  constructor(game) {
    super(game, "Narset Transcendent", "Dragons of Tarkir", "DTK");
  }
}

module.exports = NarsetTranscendent;
