"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sokenzan extends UnimplementedCard {
  constructor(game) {
    super(game, "Sokenzan", "Planechase", "HOP");
  }
}

module.exports = Sokenzan;
