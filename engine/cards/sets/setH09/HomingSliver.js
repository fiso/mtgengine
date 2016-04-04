"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HomingSliverBase = require("../setFUT/HomingSliver.js");

class HomingSliver extends HomingSliverBase {
  constructor(game) {
    super(game, "Homing Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HomingSliver;
