"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifeblood extends Card {
  constructor(game) {
    super(game, "Lifeblood", "Legends", "LEG");
  }
}

module.exports = Lifeblood;
