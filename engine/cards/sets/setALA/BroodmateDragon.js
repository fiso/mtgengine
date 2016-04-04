"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BroodmateDragonBase = require("../setpMEI/BroodmateDragon.js");

class BroodmateDragon extends BroodmateDragonBase {
  constructor(game) {
    super(game, "Broodmate Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = BroodmateDragon;
