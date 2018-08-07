"use strict";
const Constants = require ("../../../Constants");
const HeavyArbalestBase = require("../setA25/HeavyArbalest");

class HeavyArbalest extends HeavyArbalestBase {
  constructor (game) {
    super(game, "Heavy Arbalest", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HeavyArbalest;
