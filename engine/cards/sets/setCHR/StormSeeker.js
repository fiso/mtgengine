"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormSeeker extends Card {
  constructor(game) {
    super(game, "Storm Seeker", "Chronicles", "CHR");
  }
}

module.exports = StormSeeker;
