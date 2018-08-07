"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vivify extends UnimplementedCard {
  constructor (game) {
    super(game, "Vivify", "Odyssey", "ODY");
  }
}

module.exports = Vivify;
