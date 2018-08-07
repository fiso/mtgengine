"use strict";
const Constants = require ("../../../Constants");
const SplittingSlimeBase = require("../setPZ2/SplittingSlime");

class SplittingSlime extends SplittingSlimeBase {
  constructor (game) {
    super(game, "Splitting Slime", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SplittingSlime;
