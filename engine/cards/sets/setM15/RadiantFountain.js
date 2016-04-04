"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RadiantFountain extends Card {
  constructor(game) {
    super(game, "Radiant Fountain", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RadiantFountain;
