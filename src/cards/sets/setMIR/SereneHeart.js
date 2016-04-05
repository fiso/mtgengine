"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SereneHeart extends UnimplementedCard {
  constructor(game) {
    super(game, "Serene Heart", "Mirage", "MIR");
  }
}

module.exports = SereneHeart;
