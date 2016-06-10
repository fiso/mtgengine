"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OakStreetInnkeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Oak Street Innkeeper", "Return to Ravnica", "RTR");
  }
}

module.exports = OakStreetInnkeeper;
