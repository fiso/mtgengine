"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FacetoFace extends UnimplementedCard {
  constructor (game) {
    super(game, "Face to Face", "Unhinged", "UNH");
  }
}

module.exports = FacetoFace;
