"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftsGiven extends UnimplementedCard {
  constructor (game) {
    super(game, "Gifts Given", "Happy Holidays", "HHO");
  }
}

module.exports = GiftsGiven;
