"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScornedVillager extends Card {
  constructor(game) {
    super(game, "Scorned Villager", "Dark Ascension", "DKA");
  }
}

module.exports = ScornedVillager;
