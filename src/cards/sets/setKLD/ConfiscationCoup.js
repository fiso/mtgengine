"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConfiscationCoup extends UnimplementedCard {
  constructor (game) {
    super(game, "Confiscation Coup", "Kaladesh", "KLD");
  }
}

module.exports = ConfiscationCoup;
