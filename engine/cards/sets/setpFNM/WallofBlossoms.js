"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofBlossomsBase = require("../setC15/WallofBlossoms.js");

class WallofBlossoms extends WallofBlossomsBase {
  constructor(game) {
    super(game, "Wall of Blossoms", "Friday Night Magic", "pFNM");
  }
}

module.exports = WallofBlossoms;
