"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorldgorgerDragonBase = require("../setJUD/WorldgorgerDragon.js");

class WorldgorgerDragon extends WorldgorgerDragonBase {
  constructor(game) {
    super(game, "Worldgorger Dragon", "Vintage Masters", "VMA");
  }
}

module.exports = WorldgorgerDragon;
