"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lightform extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightform", "Fate Reforged", "FRF");
  }
}

module.exports = Lightform;
