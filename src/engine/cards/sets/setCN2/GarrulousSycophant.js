"use strict";
const Constants = require ("../../../Constants");
const GarrulousSycophantBase = require("../setPZ2/GarrulousSycophant");

class GarrulousSycophant extends GarrulousSycophantBase {
  constructor (game) {
    super(game, "Garrulous Sycophant", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GarrulousSycophant;
