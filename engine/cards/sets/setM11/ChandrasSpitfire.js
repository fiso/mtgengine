"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandrasSpitfire extends Card {
  constructor(game) {
    super(game, "Chandra's Spitfire", "Magic 2011", "M11");
  }
}

module.exports = ChandrasSpitfire;
