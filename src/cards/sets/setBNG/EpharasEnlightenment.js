"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpharasEnlightenment extends UnimplementedCard {
  constructor (game) {
    super(game, "Ephara's Enlightenment", "Born of the Gods", "BNG");
  }
}

module.exports = EpharasEnlightenment;
