"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackLotus extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Lotus", "Collector's Edition", "CED");
  }
}

module.exports = BlackLotus;
