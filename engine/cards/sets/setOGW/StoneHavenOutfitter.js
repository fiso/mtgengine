"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneHavenOutfitter extends Card {
  constructor(game) {
    super(game, "Stone Haven Outfitter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneHavenOutfitter;
