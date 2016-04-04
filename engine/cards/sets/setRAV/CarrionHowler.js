"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionHowler extends Card {
  constructor(game) {
    super(game, "Carrion Howler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CarrionHowler;
