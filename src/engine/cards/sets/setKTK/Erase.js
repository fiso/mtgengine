"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Erase extends UnimplementedCard {
  constructor (game) {
    super(game, "Erase", "Khans of Tarkir", "KTK");
  }
}

module.exports = Erase;
