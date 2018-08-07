"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GontiLordofLuxury extends UnimplementedCard {
  constructor (game) {
    super(game, "Gonti, Lord of Luxury", "Kaladesh", "KLD");
  }
}

module.exports = GontiLordofLuxury;
