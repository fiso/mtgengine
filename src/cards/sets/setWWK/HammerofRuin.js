"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerofRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer of Ruin", "Worldwake", "WWK");
  }
}

module.exports = HammerofRuin;
