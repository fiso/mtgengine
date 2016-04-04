"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Vodalian Serpent", "Invasion", "INV");
  }
}

module.exports = VodalianSerpent;
