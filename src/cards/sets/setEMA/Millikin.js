"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Millikin extends UnimplementedCard {
  constructor (game) {
    super(game, "Millikin", "Eternal Masters", "EMA");
  }
}

module.exports = Millikin;
