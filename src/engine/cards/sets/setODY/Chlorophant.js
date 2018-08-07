"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chlorophant extends UnimplementedCard {
  constructor (game) {
    super(game, "Chlorophant", "Odyssey", "ODY");
  }
}

module.exports = Chlorophant;
