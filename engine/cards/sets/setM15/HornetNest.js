"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornetNest extends Card {
  constructor(game) {
    super(game, "Hornet Nest", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HornetNest;
