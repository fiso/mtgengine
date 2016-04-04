"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndergrowthChampion extends Card {
  constructor(game) {
    super(game, "Undergrowth Champion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UndergrowthChampion;
