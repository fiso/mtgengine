"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntedAngel extends Card {
  constructor(game) {
    super(game, "Haunted Angel", "Apocalypse", "APC");
  }
}

module.exports = HauntedAngel;
