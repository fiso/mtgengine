"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntersProwess extends Card {
  constructor(game) {
    super(game, "Hunter's Prowess", "Born of the Gods", "BNG");
  }
}

module.exports = HuntersProwess;
