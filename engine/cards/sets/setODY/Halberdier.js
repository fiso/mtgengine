"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Halberdier extends Card {
  constructor(game) {
    super(game, "Halberdier", "Odyssey", "ODY");
  }
}

module.exports = Halberdier;
