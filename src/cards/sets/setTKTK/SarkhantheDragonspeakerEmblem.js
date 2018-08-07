"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhantheDragonspeakerEmblem extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarkhan, the Dragonspeaker Emblem", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = SarkhantheDragonspeakerEmblem;
