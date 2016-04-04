"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mortipede extends Card {
  constructor(game) {
    super(game, "Mortipede", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Mortipede;
