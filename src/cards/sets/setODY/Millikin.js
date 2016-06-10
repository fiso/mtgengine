"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Millikin extends UnimplementedCard {
  constructor (game) {
    super(game, "Millikin", "Odyssey", "ODY");
  }
}

module.exports = Millikin;
