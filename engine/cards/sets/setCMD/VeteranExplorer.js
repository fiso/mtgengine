"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranExplorer extends Card {
  constructor(game) {
    super(game, "Veteran Explorer", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VeteranExplorer;
