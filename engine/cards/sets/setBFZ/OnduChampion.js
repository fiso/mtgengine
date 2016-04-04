"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OnduChampion extends Card {
  constructor(game) {
    super(game, "Ondu Champion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = OnduChampion;
