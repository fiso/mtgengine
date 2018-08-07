"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skyshooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Skyshooter", "Odyssey", "ODY");
  }
}

module.exports = Skyshooter;
