"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarsetTranscendentEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Narset Transcendent Emblem", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = NarsetTranscendentEmblem;
