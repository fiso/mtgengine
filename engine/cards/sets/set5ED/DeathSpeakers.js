"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathSpeakers extends Card {
  constructor(game) {
    super(game, "Death Speakers", "Fifth Edition", "5ED");
  }
}

module.exports = DeathSpeakers;
