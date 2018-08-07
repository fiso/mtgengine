"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlayersCleaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Slayer's Cleaver", "Eldritch Moon", "EMN");
  }
}

module.exports = SlayersCleaver;
