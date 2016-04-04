"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolemsHeart extends Card {
  constructor(game) {
    super(game, "Golem's Heart", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GolemsHeart;
