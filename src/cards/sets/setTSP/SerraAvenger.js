"use strict";
const Constants = require ("../../../Constants");
const SerraAvengerBase = require("../setpCMP/SerraAvenger");

class SerraAvenger extends SerraAvengerBase {
  constructor(game) {
    super(game, "Serra Avenger", "Time Spiral", "TSP");
  }
}

module.exports = SerraAvenger;
