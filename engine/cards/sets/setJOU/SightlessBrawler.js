"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SightlessBrawler extends Card {
  constructor(game) {
    super(game, "Sightless Brawler", "Journey into Nyx", "JOU");
  }
}

module.exports = SightlessBrawler;
