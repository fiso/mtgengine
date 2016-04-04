"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtificersIntuition extends Card {
  constructor(game) {
    super(game, "Artificer's Intuition", "Fifth Dawn", "5DN");
  }
}

module.exports = ArtificersIntuition;
