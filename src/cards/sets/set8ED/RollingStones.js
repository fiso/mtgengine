"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollingStones extends UnimplementedCard {
  constructor(game) {
    super(game, "Rolling Stones", "Eighth Edition", "8ED");
  }
}

module.exports = RollingStones;
