"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FranticSalvage extends Card {
  constructor(game) {
    super(game, "Frantic Salvage", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FranticSalvage;
