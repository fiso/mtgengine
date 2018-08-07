"use strict";
const Constants = require ("../../../Constants");
const HoardSmelterDragonBase = require("../setCM2/HoardSmelterDragon");

class HoardSmelterDragon extends HoardSmelterDragonBase {
  constructor (game) {
    super(game, "Hoard-Smelter Dragon", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HoardSmelterDragon;
