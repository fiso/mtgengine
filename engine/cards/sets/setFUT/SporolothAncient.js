"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SporolothAncient extends Card {
  constructor(game) {
    super(game, "Sporoloth Ancient", "Future Sight", "FUT");
  }
}

module.exports = SporolothAncient;
