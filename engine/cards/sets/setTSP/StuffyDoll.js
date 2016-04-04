"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StuffyDollBase = require("../setM13/StuffyDoll.js");

class StuffyDoll extends StuffyDollBase {
  constructor(game) {
    super(game, "Stuffy Doll", "Time Spiral", "TSP");
  }
}

module.exports = StuffyDoll;
