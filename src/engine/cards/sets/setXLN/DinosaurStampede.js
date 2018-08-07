"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DinosaurStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Dinosaur Stampede", "Ixalan", "XLN");
  }
}

module.exports = DinosaurStampede;
