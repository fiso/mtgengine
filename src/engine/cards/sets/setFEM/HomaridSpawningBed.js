"use strict";
const Constants = require ("../../../Constants");
const HomaridSpawningBedBase = require("../setMED/HomaridSpawningBed");

class HomaridSpawningBed extends HomaridSpawningBedBase {
  constructor (game) {
    super(game, "Homarid Spawning Bed", "Fallen Empires", "FEM");
  }
}

module.exports = HomaridSpawningBed;
