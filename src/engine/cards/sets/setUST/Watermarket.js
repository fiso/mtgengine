"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Watermarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Watermarket", "Unstable", "UST");
  }
}

module.exports = Watermarket;
