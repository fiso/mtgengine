"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ButcheroftheHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Butcher of the Horde", "Khans of Tarkir", "KTK");
  }
}

module.exports = ButcheroftheHorde;
