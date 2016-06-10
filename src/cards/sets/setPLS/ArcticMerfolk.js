"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcticMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Arctic Merfolk", "Planeshift", "PLS");
  }
}

module.exports = ArcticMerfolk;
