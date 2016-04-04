"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofBlossomsBase = require("../setC15/WallofBlossoms.js");

class WallofBlossoms extends WallofBlossomsBase {
  constructor(game) {
    super(game, "Wall of Blossoms", "From the Vault: Twenty", "V13");
  }
}

module.exports = WallofBlossoms;
