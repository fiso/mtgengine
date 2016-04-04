"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YuanShaosInfantry extends Card {
  constructor(game) {
    super(game, "Yuan Shao's Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = YuanShaosInfantry;
