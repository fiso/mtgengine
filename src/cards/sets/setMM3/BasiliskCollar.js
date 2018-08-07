"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasiliskCollar extends UnimplementedCard {
  constructor (game) {
    super(game, "Basilisk Collar", "Modern Masters 2017", "MM3");
  }
}

module.exports = BasiliskCollar;
