"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakenoSamuraiGeneral extends UnimplementedCard {
  constructor(game) {
    super(game, "Takeno, Samurai General", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TakenoSamuraiGeneral;
