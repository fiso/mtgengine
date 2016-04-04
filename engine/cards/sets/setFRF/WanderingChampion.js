"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingChampion extends Card {
  constructor(game) {
    super(game, "Wandering Champion", "Fate Reforged", "FRF");
  }
}

module.exports = WanderingChampion;
