"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcticWolves extends Card {
  constructor(game) {
    super(game, "Arctic Wolves", "Weatherlight", "WTH");
  }
}

module.exports = ArcticWolves;
