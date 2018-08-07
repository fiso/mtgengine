"use strict";
const Constants = require ("../../../Constants");
const WallofBramblesBase = require("../set5ED/WallofBrambles");

class WallofBrambles extends WallofBramblesBase {
  constructor (game) {
    super(game, "Wall of Brambles", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofBrambles;
