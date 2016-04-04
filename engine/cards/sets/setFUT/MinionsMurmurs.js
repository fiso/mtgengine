"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinionsMurmurs extends Card {
  constructor(game) {
    super(game, "Minions' Murmurs", "Future Sight", "FUT");
  }
}

module.exports = MinionsMurmurs;
