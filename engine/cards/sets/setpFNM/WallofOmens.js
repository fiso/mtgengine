"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofOmensBase = require("../setDDK/WallofOmens.js");

class WallofOmens extends WallofOmensBase {
  constructor(game) {
    super(game, "Wall of Omens", "Friday Night Magic", "pFNM");
  }
}

module.exports = WallofOmens;
