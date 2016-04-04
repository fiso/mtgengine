"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ProwlingPangolin extends Card {
  constructor(game) {
    super(game, "Prowling Pangolin", "Onslaught", "ONS");
  }
}

module.exports = ProwlingPangolin;
