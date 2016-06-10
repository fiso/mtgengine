"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandLake extends UnimplementedCard {
  constructor (game) {
    super(game, "Highland Lake", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HighlandLake;
