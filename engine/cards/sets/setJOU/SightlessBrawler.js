"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SightlessBrawler extends UnimplementedCard {
  constructor(game) {
    super(game, "Sightless Brawler", "Journey into Nyx", "JOU");
  }
}

module.exports = SightlessBrawler;
