"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StandorFall extends Card {
  constructor(game) {
    super(game, "Stand or Fall", "Invasion", "INV");
  }
}

module.exports = StandorFall;
