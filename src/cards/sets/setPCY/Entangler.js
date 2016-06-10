"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Entangler extends UnimplementedCard {
  constructor (game) {
    super(game, "Entangler", "Prophecy", "PCY");
  }
}

module.exports = Entangler;
