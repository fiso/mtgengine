"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BullRush extends UnimplementedCard {
  constructor(game) {
    super(game, "Bull Rush", "Worldwake", "WWK");
  }
}

module.exports = BullRush;
