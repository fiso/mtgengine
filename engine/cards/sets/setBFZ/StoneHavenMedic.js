"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneHavenMedic extends Card {
  constructor(game) {
    super(game, "Stone Haven Medic", "Battle for Zendikar", "BFZ");
  }
}

module.exports = StoneHavenMedic;
