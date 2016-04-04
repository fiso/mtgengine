"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiskAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Whisk Away", "Fate Reforged", "FRF");
  }
}

module.exports = WhiskAway;
