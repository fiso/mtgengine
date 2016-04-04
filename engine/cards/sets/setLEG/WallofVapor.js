"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofVaporBase = require("../setCHR/WallofVapor.js");

class WallofVapor extends WallofVaporBase {
  constructor(game) {
    super(game, "Wall of Vapor", "Legends", "LEG");
  }
}

module.exports = WallofVapor;
