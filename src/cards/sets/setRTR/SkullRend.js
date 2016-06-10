"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullRend extends UnimplementedCard {
  constructor (game) {
    super(game, "Skull Rend", "Return to Ravnica", "RTR");
  }
}

module.exports = SkullRend;
