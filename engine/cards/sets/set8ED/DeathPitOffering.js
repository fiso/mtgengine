"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathPitOffering extends Card {
  constructor(game) {
    super(game, "Death Pit Offering", "Eighth Edition", "8ED");
  }
}

module.exports = DeathPitOffering;
