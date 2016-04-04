"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlliedStrategiesBase = require("../setDDE/AlliedStrategies.js");

class AlliedStrategies extends AlliedStrategiesBase {
  constructor(game) {
    super(game, "Allied Strategies", "Planeshift", "PLS");
  }
}

module.exports = AlliedStrategies;
