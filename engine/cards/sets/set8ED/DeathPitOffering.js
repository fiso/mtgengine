"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathPitOffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Pit Offering", "Eighth Edition", "8ED");
  }
}

module.exports = DeathPitOffering;
