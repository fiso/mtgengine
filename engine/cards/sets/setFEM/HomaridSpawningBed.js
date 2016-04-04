"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HomaridSpawningBed extends Card {
  constructor(game) {
    super(game, "Homarid Spawning Bed", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridSpawningBed;
