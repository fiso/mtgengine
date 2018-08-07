"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaughtyNice extends UnimplementedCard {
  constructor (game) {
    super(game, "Naughty // Nice", "Happy Holidays", "HHO");
  }
}

module.exports = NaughtyNice;
