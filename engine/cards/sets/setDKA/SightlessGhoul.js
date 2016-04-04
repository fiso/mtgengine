"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SightlessGhoul extends Card {
  constructor(game) {
    super(game, "Sightless Ghoul", "Dark Ascension", "DKA");
  }
}

module.exports = SightlessGhoul;
