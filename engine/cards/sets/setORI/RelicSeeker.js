"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RelicSeeker extends Card {
  constructor(game) {
    super(game, "Relic Seeker", "Magic Origins", "ORI");
  }
}

module.exports = RelicSeeker;
