"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullSaucer extends UnimplementedCard {
  constructor (game) {
    super(game, "Skull Saucer", "Unstable", "UST");
  }
}

module.exports = SkullSaucer;
