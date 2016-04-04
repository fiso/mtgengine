"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreedingPitBase = require("../setDD3_DVD/BreedingPit.js");

class BreedingPit extends BreedingPitBase {
  constructor(game) {
    super(game, "Breeding Pit", "Fifth Edition", "5ED");
  }
}

module.exports = BreedingPit;
