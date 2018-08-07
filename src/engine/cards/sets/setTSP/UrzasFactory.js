"use strict";
const Constants = require ("../../../Constants");
const UrzasFactoryBase = require("../setC13/UrzasFactory");

class UrzasFactory extends UrzasFactoryBase {
  constructor (game) {
    super(game, "Urza's Factory", "Time Spiral", "TSP");
  }
}

module.exports = UrzasFactory;
