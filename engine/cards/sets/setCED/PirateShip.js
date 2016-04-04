"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PirateShip extends Card {
  constructor(game) {
    super(game, "Pirate Ship", "Collector's Edition", "CED");
  }
}

module.exports = PirateShip;
