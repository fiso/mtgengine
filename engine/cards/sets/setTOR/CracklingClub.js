"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CracklingClub extends Card {
  constructor(game) {
    super(game, "Crackling Club", "Torment", "TOR");
  }
}

module.exports = CracklingClub;
