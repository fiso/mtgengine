"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolitaryHunterOneofthePack extends UnimplementedCard {
  constructor (game) {
    super(game, "Solitary Hunter // One of the Pack", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SolitaryHunterOneofthePack;
