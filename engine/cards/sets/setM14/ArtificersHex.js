"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtificersHex extends Card {
  constructor(game) {
    super(game, "Artificer's Hex", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ArtificersHex;
