"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagetatheLion extends Card {
  constructor(game) {
    super(game, "Mageta the Lion", "Prophecy", "PCY");
  }
}

module.exports = MagetatheLion;
