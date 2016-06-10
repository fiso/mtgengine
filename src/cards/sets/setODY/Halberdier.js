"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Halberdier extends UnimplementedCard {
  constructor (game) {
    super(game, "Halberdier", "Odyssey", "ODY");
  }
}

module.exports = Halberdier;
