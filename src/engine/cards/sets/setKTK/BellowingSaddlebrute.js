"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BellowingSaddlebrute extends UnimplementedCard {
  constructor (game) {
    super(game, "Bellowing Saddlebrute", "Khans of Tarkir", "KTK");
  }
}

module.exports = BellowingSaddlebrute;
