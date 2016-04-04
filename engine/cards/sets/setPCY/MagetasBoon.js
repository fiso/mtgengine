"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagetasBoon extends Card {
  constructor(game) {
    super(game, "Mageta's Boon", "Prophecy", "PCY");
  }
}

module.exports = MagetasBoon;
