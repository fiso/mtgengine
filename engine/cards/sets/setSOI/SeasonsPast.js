"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonsPast extends UnimplementedCard {
  constructor(game) {
    super(game, "Seasons Past", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SeasonsPast;
