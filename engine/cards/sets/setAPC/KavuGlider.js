"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Glider", "Apocalypse", "APC");
  }
}

module.exports = KavuGlider;
