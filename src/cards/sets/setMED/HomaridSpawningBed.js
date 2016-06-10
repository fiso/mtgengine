"use strict";
const Constants = require ("../../../Constants");
const HomaridSpawningBedBase = require("../setFEM/HomaridSpawningBed");

class HomaridSpawningBed extends HomaridSpawningBedBase {
  constructor (game) {
    super(game, "Homarid Spawning Bed", "Masters Edition", "MED");
  }
}

module.exports = HomaridSpawningBed;
