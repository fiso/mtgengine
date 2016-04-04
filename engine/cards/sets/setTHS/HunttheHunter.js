"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HunttheHunter extends Card {
  constructor(game) {
    super(game, "Hunt the Hunter", "Theros", "THS");
  }
}

module.exports = HunttheHunter;
