"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortunesFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortune's Favor", "Friday Night Magic 2017", "F17");
  }
}

module.exports = FortunesFavor;
