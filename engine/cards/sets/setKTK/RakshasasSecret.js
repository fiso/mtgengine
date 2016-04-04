"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakshasasSecret extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakshasa's Secret", "Khans of Tarkir", "KTK");
  }
}

module.exports = RakshasasSecret;
