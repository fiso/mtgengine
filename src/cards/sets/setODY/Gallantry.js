"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gallantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gallantry", "Odyssey", "ODY");
  }
}

module.exports = Gallantry;
