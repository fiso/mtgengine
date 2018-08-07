"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerMan extends UnimplementedCard {
  constructor (game) {
    super(game, "Mer Man", "Unstable", "UST");
  }
}

module.exports = MerMan;
