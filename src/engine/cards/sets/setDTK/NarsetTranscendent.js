"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarsetTranscendent extends UnimplementedCard {
  constructor (game) {
    super(game, "Narset Transcendent", "Dragons of Tarkir", "DTK");
  }
}

module.exports = NarsetTranscendent;
