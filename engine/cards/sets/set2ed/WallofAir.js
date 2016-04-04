"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofAirBase = require("../set6ED/WallofAir.js");

class WallofAir extends WallofAirBase {
  constructor(game) {
    super(game, "Wall of Air", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofAir;
