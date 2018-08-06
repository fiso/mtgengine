"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CropSigil extends UnimplementedCard {
  constructor (game) {
    super(game, "Crop Sigil", "Eldritch Moon", "EMN");
  }
}

module.exports = CropSigil;
