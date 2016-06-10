"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shiv extends UnimplementedCard {
  constructor (game) {
    super(game, "Shiv", "Planechase", "HOP");
  }
}

module.exports = Shiv;
