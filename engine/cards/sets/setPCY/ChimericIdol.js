"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChimericIdol extends Card {
  constructor(game) {
    super(game, "Chimeric Idol", "Prophecy", "PCY");
  }
}

module.exports = ChimericIdol;
