"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MantaRay extends Card {
  constructor(game) {
    super(game, "Manta Ray", "Weatherlight", "WTH");
  }
}

module.exports = MantaRay;
