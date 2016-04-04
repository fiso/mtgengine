"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildRicochetBase = require("../setC13/WildRicochet.js");

class WildRicochet extends WildRicochetBase {
  constructor(game) {
    super(game, "Wild Ricochet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WildRicochet;
