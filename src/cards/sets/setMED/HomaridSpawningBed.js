"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomaridSpawningBed extends UnimplementedCard {
  constructor (game) {
    super(game, "Homarid Spawning Bed", "Masters Edition", "MED");
  }
}

module.exports = HomaridSpawningBed;
