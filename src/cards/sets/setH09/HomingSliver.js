"use strict";
const Constants = require ("../../../Constants");
const HomingSliverBase = require("../setFUT/HomingSliver");

class HomingSliver extends HomingSliverBase {
  constructor (game) {
    super(game, "Homing Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = HomingSliver;
