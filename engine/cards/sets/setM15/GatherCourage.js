"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatherCourage extends Card {
  constructor(game) {
    super(game, "Gather Courage", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GatherCourage;
