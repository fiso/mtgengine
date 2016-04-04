"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soulquake extends Card {
  constructor(game) {
    super(game, "Soulquake", "Alara Reborn", "ARB");
  }
}

module.exports = Soulquake;
