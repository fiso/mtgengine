"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulConduit extends Card {
  constructor(game) {
    super(game, "Soul Conduit", "New Phyrexia", "NPH");
  }
}

module.exports = SoulConduit;
