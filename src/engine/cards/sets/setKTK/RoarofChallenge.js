"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoarofChallenge extends UnimplementedCard {
  constructor (game) {
    super(game, "Roar of Challenge", "Khans of Tarkir", "KTK");
  }
}

module.exports = RoarofChallenge;
