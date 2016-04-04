"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwiftfootBootsBase = require("../setC13/SwiftfootBoots.js");

class SwiftfootBoots extends SwiftfootBootsBase {
  constructor(game) {
    super(game, "Swiftfoot Boots", "Commander 2015", "C15");
  }
}

module.exports = SwiftfootBoots;
