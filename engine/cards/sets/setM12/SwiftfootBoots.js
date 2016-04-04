"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwiftfootBootsBase = require("../setC13/SwiftfootBoots.js");

class SwiftfootBoots extends SwiftfootBootsBase {
  constructor(game) {
    super(game, "Swiftfoot Boots", "Magic 2012", "M12");
  }
}

module.exports = SwiftfootBoots;
