"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkSuspicions extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Suspicions", "Planeshift", "PLS");
  }
}

module.exports = DarkSuspicions;
