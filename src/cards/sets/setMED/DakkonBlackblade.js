"use strict";
const Constants = require ("../../../Constants");
const DakkonBlackbladeBase = require("../setCHR/DakkonBlackblade");

class DakkonBlackblade extends DakkonBlackbladeBase {
  constructor(game) {
    super(game, "Dakkon Blackblade", "Masters Edition", "MED");
  }
}

module.exports = DakkonBlackblade;
