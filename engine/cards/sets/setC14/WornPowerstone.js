"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WornPowerstone extends Card {
  constructor(game) {
    super(game, "Worn Powerstone", "Commander 2014", "C14");
  }
}

module.exports = WornPowerstone;
