"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneHavenOutfitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Haven Outfitter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneHavenOutfitter;
