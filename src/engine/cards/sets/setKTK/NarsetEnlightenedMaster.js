"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarsetEnlightenedMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Narset, Enlightened Master", "Khans of Tarkir", "KTK");
  }
}

module.exports = NarsetEnlightenedMaster;
