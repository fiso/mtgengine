"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaintersServant extends Card {
  constructor(game) {
    super(game, "Painter's Servant", "Shadowmoor", "SHM");
  }
}

module.exports = PaintersServant;
