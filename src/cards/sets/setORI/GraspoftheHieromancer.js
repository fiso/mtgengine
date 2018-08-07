"use strict";
const Constants = require ("../../../Constants");
const GraspoftheHieromancerBase = require("../setE01/GraspoftheHieromancer");

class GraspoftheHieromancer extends GraspoftheHieromancerBase {
  constructor (game) {
    super(game, "Grasp of the Hieromancer", "Magic Origins", "ORI");
  }
}

module.exports = GraspoftheHieromancer;
