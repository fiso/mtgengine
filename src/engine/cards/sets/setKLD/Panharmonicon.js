"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Panharmonicon extends UnimplementedCard {
  constructor (game) {
    super(game, "Panharmonicon", "Kaladesh", "KLD");
  }
}

module.exports = Panharmonicon;
