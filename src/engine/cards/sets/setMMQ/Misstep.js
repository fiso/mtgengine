"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misstep extends UnimplementedCard {
  constructor (game) {
    super(game, "Misstep", "Mercadian Masques", "MMQ");
  }
}

module.exports = Misstep;
