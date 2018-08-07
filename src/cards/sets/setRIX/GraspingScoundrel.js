"use strict";
const Constants = require ("../../../Constants");
const GraspingScoundrelBase = require("../setM19/GraspingScoundrel");

class GraspingScoundrel extends GraspingScoundrelBase {
  constructor (game) {
    super(game, "Grasping Scoundrel", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GraspingScoundrel;
