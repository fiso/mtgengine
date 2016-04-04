"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathSpeakers extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Speakers", "Fifth Edition", "5ED");
  }
}

module.exports = DeathSpeakers;
