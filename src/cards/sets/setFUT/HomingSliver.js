"use strict";
const Constants = require ("../../../Constants");
const HomingSliverBase = require("../setH09/HomingSliver");

class HomingSliver extends HomingSliverBase {
  constructor (game) {
    super(game, "Homing Sliver", "Future Sight", "FUT");
  }
}

module.exports = HomingSliver;
