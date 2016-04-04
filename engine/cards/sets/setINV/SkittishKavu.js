"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkittishKavu extends Card {
  constructor(game) {
    super(game, "Skittish Kavu", "Invasion", "INV");
  }
}

module.exports = SkittishKavu;
