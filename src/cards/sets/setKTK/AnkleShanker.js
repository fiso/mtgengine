"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnkleShanker extends UnimplementedCard {
  constructor (game) {
    super(game, "Ankle Shanker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AnkleShanker;
