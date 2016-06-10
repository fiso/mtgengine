"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SightlessGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Sightless Ghoul", "Dark Ascension", "DKA");
  }
}

module.exports = SightlessGhoul;
