"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiotRingleader extends Card {
  constructor(game) {
    super(game, "Riot Ringleader", "Avacyn Restored", "AVR");
  }
}

module.exports = RiotRingleader;
