"use strict";
const Constants = require ("../../../Constants");
const RockslideElementalBase = require("../setHOP/RockslideElemental");

class RockslideElemental extends RockslideElementalBase {
  constructor (game) {
    super(game, "Rockslide Elemental", "Shards of Alara", "ALA");
  }
}

module.exports = RockslideElemental;
