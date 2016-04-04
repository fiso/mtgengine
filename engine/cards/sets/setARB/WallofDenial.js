"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofDenial extends Card {
  constructor(game) {
    super(game, "Wall of Denial", "Alara Reborn", "ARB");
  }
}

module.exports = WallofDenial;
