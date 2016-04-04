"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianSerpent extends Card {
  constructor(game) {
    super(game, "Vodalian Serpent", "Invasion", "INV");
  }
}

module.exports = VodalianSerpent;
