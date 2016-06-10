"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Confessor extends UnimplementedCard {
  constructor (game) {
    super(game, "Confessor", "Odyssey", "ODY");
  }
}

module.exports = Confessor;
