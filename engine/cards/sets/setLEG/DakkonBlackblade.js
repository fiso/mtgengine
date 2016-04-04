"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DakkonBlackbladeBase = require("../setCHR/DakkonBlackblade.js");

class DakkonBlackblade extends DakkonBlackbladeBase {
  constructor(game) {
    super(game, "Dakkon Blackblade", "Legends", "LEG");
  }
}

module.exports = DakkonBlackblade;
