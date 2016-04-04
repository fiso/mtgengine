"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasFactoryBase = require("../setpCMP/UrzasFactory.js");

class UrzasFactory extends UrzasFactoryBase {
  constructor(game) {
    super(game, "Urza's Factory", "Time Spiral", "TSP");
  }
}

module.exports = UrzasFactory;
