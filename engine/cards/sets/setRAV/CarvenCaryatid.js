"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarvenCaryatid extends Card {
  constructor(game) {
    super(game, "Carven Caryatid", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CarvenCaryatid;
