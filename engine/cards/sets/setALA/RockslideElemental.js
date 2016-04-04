"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RockslideElementalBase = require("../setHOP/RockslideElemental.js");

class RockslideElemental extends RockslideElementalBase {
  constructor(game) {
    super(game, "Rockslide Elemental", "Shards of Alara", "ALA");
  }
}

module.exports = RockslideElemental;
