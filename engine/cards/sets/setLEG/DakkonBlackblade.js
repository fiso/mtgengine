"use strict";
const Constants = require ("../../../Constants");
const DakkonBlackbladeBase = require("../setCHR/DakkonBlackblade");

class DakkonBlackblade extends DakkonBlackbladeBase {
  constructor(game) {
    super(game, "Dakkon Blackblade", "Legends", "LEG");
  }
}

module.exports = DakkonBlackblade;
