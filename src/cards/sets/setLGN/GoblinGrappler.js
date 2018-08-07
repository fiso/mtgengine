"use strict";
const Constants = require ("../../../Constants");
const GoblinGrapplerBase = require("../setWC03/GoblinGrappler");

class GoblinGrappler extends GoblinGrapplerBase {
  constructor (game) {
    super(game, "Goblin Grappler", "Legions", "LGN");
  }
}

module.exports = GoblinGrappler;
