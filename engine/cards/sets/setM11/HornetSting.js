"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornetSting extends Card {
  constructor(game) {
    super(game, "Hornet Sting", "Magic 2011", "M11");
  }
}

module.exports = HornetSting;
