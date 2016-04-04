"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandrasIgnition extends Card {
  constructor(game) {
    super(game, "Chandra's Ignition", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasIgnition;
