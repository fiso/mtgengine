"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TotallyLost extends UnimplementedCard {
  constructor (game) {
    super(game, "Totally Lost", "Core Set 2019", "M19");
  }
}

module.exports = TotallyLost;
