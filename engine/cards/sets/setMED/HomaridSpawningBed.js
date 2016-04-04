"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HomaridSpawningBedBase = require("../setFEM/HomaridSpawningBed.js");

class HomaridSpawningBed extends HomaridSpawningBedBase {
  constructor(game) {
    super(game, "Homarid Spawning Bed", "Masters Edition", "MED");
  }
}

module.exports = HomaridSpawningBed;
