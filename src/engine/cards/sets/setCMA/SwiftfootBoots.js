"use strict";
const Constants = require ("../../../Constants");
const SwiftfootBootsBase = require("../setC18/SwiftfootBoots");

class SwiftfootBoots extends SwiftfootBootsBase {
  constructor (game) {
    super(game, "Swiftfoot Boots", "Commander Anthology", "CMA");
  }
}

module.exports = SwiftfootBoots;
