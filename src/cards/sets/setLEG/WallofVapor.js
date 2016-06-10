"use strict";
const Constants = require ("../../../Constants");
const WallofVaporBase = require("../setCHR/WallofVapor");

class WallofVapor extends WallofVaporBase {
  constructor (game) {
    super(game, "Wall of Vapor", "Legends", "LEG");
  }
}

module.exports = WallofVapor;
