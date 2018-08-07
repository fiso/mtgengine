"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialSeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Seal", "Judge Gift Cards 2016", "J16");
  }
}

module.exports = ImperialSeal;
