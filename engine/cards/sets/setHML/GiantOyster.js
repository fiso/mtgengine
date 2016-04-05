"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantOyster extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Oyster", "Homelands", "HML");
  }
}

module.exports = GiantOyster;
