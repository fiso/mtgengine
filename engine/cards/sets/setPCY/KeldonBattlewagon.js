"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeldonBattlewagon extends Card {
  constructor(game) {
    super(game, "Keldon Battlewagon", "Prophecy", "PCY");
  }
}

module.exports = KeldonBattlewagon;
