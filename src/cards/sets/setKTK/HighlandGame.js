"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandGame extends UnimplementedCard {
  constructor (game) {
    super(game, "Highland Game", "Khans of Tarkir", "KTK");
  }
}

module.exports = HighlandGame;
