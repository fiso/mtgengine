"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FertileImagination extends UnimplementedCard {
  constructor (game) {
    super(game, "Fertile Imagination", "Dissension", "DIS");
  }
}

module.exports = FertileImagination;
