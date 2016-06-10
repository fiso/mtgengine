"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Batterhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Batterhorn", "Return to Ravnica", "RTR");
  }
}

module.exports = Batterhorn;
