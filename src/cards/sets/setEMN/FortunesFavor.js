"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortunesFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortune's Favor", "Eldritch Moon", "EMN");
  }
}

module.exports = FortunesFavor;
