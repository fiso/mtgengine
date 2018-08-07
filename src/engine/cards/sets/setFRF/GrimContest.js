"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimContest extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Contest", "Fate Reforged", "FRF");
  }
}

module.exports = GrimContest;
