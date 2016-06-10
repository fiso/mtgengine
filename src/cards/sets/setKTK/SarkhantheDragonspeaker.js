"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhantheDragonspeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Sarkhan, the Dragonspeaker", "Khans of Tarkir", "KTK");
  }
}

module.exports = SarkhantheDragonspeaker;
