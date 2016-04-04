"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AkroanHorse extends Card {
  constructor(game) {
    super(game, "Akroan Horse", "Theros", "THS");
  }
}

module.exports = AkroanHorse;
