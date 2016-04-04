"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skyshooter extends Card {
  constructor(game) {
    super(game, "Skyshooter", "Odyssey", "ODY");
  }
}

module.exports = Skyshooter;
