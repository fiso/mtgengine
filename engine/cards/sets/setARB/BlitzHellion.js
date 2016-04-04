"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlitzHellion extends Card {
  constructor(game) {
    super(game, "Blitz Hellion", "Alara Reborn", "ARB");
  }
}

module.exports = BlitzHellion;
